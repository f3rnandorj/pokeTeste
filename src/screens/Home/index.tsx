import * as React from "react";
import { StatusBar } from "react-native";
import { Header } from "../../components/Header";
import logo from "../../assets/logo.png";

import { Container, Title, List, Footer, Img } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <Title>Qual pokémon você escolheria?</Title>
      <List></List>

      <Footer>
        <Img source={logo} />
      </Footer>
    </Container>
  );
}
