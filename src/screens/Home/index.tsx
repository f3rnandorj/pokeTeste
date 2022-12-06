import * as React from "react";

import { Background } from "../../components/Background";

import { Container, Text } from "./styles";

export function Home() {
  return (
    <Background>
      <Container>
        <Text>Hello home</Text>
      </Container>
    </Background>
  );
}
