import * as React from "react";
import { useEffect, useState } from "react";
import { FlatList, StatusBar, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import api from "../../services/api";

import async from "async";

import logo from "../../assets/logo.png";
import { Container, Title, List, Footer, Img } from "./styles";

import { pokemons } from "../../mocks/pokemons";
import { PokeCard, PokeCardProps } from "../../components/PokeCard";
import { Header } from "../../components/Header";

interface PokemonApiProps {
  name: string;
  id: string;
  types: [
    {
      type: {
        name: string;
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
}

export function Home() {
  const { colors } = useTheme();
  const [pokemonData, setPokemonData] = useState<PokemonApiProps[]>([]);

  const navigation = useNavigation();

  let apiData: PokemonApiProps[] = [];

  useEffect(() => {
    async function HandleGetPokemon() {
      const response = await api.get(`/pokemon/`);
      const { results } = response.data;

      for (let i = 0; i < results.length; i++) {
        const name = results[i].name;
        await api.get(`/pokemon/${name}/`).then((response) => {
          apiData.push(response.data);
        });
      }
      setPokemonData(apiData);
    }

    HandleGetPokemon();

    // // function changeColor(type: string) {
    // //   colors.type.map((index) => {
    // //     if (index === type) {
    // //       return index;
    // //     }
    // //   });
    // //   changeColor();
    // }
  }, [pokemonData]);

  // function handleOpenPokemon({ id }: PokeCardProps) {
  //   navigation.navigate("pokemon", id);
  // }

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
              backgroundColor={item.backgroundColor}
              id={item.id}
              name={item.name}
              types={item.types[0].type.name}
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
