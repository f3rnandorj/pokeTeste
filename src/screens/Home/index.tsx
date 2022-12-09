import * as React from "react";
import { useState } from "react";
import { FlatList, StatusBar, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import logo from "../../assets/logo.png";
import { PokeCard, PokeCardProps } from "../../components/PokeCard";
import { pokemons } from "../../mocks/pokemons";
import { Container, Title, List, Footer, Img } from "./styles";

export function Home() {
  const [pokemon, setPokemon] = useState<PokeCardProps[]>([]);

  const navigation = useNavigation();

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
          data={pokemons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PokeCard
              color={item.color}
              id={item.id}
              name={item.name}
              type={item.type}
              avatar_url={item.avatar}
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
