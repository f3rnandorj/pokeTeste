import * as React from "react";
import { StatusBar } from "react-native";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
    </Container>
  );
}
