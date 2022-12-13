import * as React from "react";
import { useEffect, useState } from "react";
import { FlatList, StatusBar, Text } from "react-native";
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

export interface pokemonType {
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

      const response = await api.get(`/pokemon/`);
      const { results } = response.data;

      for (let pokemon of results) {
        const name = pokemon.name;

        await api.get(`/pokemon/${name}/`).then((response) => {
          let backgroundColor = response.data.types[0].type
            .name as keyof typeof colors.type;

          //condição unica para pokemon do tipo normal
          backgroundColor === "normal" && response.data.types.length > 1
            ? (backgroundColor = response.data.types[1].type.name)
            : null;

          const color = colors.type?.[backgroundColor];

          //Renderização type e colorType
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

      setPokemonData(apiData);
    }

    HandleGetPokemon();
  }, []);

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
              backgroundColor={item.color}
              id={item.id}
              name={item.name}
              types={item.type.map((pokemonType: pokemonType) => (
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
