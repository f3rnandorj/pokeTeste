import * as React from "react";
import { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components";
import api from "../../services/api";

import logo from "../../assets/logo.png";
import { Container, Title, List, Type, Footer, Img } from "./styles";

import { PokeCard } from "../../components/PokeCard";
import { Header } from "../../components/Header";

interface PokemonApiProps {
  name: string;
  id: string;
  types: [
    {
      type: {
        name: string;
        color: string;
      };
    }
  ];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  color: string;
  type: [];
}

export interface PokemonType {
  typeColor: string;
  name: string;
}

export function Home() {
  const { colors } = useTheme();
  const [pokemonData, setPokemonData] = useState<PokemonApiProps[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function HandleGetPokemon() {
      const apiData: PokemonApiProps[] = [];

      const response = await api
        .get(`/pokemon/`)
        .catch((err) => console.log(err));

      const { results } = response.data;

      try {
        for (let pokemon of results) {
          const name = pokemon.name;
          await api.get(`/pokemon/${name}/`).then((response) => {
            let backgroundColor = response.data.types[0].type
              .name as keyof typeof colors.type;

            //condição que força a utilização da cor do segundo tipo, caso o pokemon seja do tipo normal
            backgroundColor === "normal" && response.data.types.length > 1
              ? (backgroundColor = response.data.types[1].type.name)
              : null;

            //variavel que guarda a cor do fundo do card
            const color = colors.type?.[backgroundColor];

            //variavel que carrega a logica de cor e dos principais tipos do pokemon
            const type = response.data.types.map((pokemonType: any) => {
              const typeName = pokemonType.type
                .name as keyof typeof colors.backgroundType;

              return {
                name: typeName,
                typeColor: colors.backgroundType[typeName],
              };
            });

            apiData.push({ ...response.data, color, type });
          });
        }
      } catch (err) {
        console.log(err);
      }

      setPokemonData(apiData);
    }

    HandleGetPokemon();
  }, []);

  function handleOpenPokemon(pokemonData: PokemonApiProps) {
    navigation.navigate("pokemon", pokemonData);
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <Title>Qual pokémon você escolheria?</Title>
      <List>
        <FlatList
          data={pokemonData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PokeCard
              onPress={() => handleOpenPokemon(item)}
              backgroundColor={item.color}
              id={item.id.toString().padStart(3, "0")}
              name={item.name}
              types={item.type.map((pokemonType: PokemonType) => (
                <Type color={pokemonType.typeColor} key={pokemonType.name}>
                  {pokemonType.name}
                </Type>
              ))}
              avatar={item.sprites.other["official-artwork"].front_default}
            />
          )}
          horizontal={false}
          numColumns={2}
        />
      </List>

      <Footer>
        <Img source={logo} />
      </Footer>
    </Container>
  );
}
