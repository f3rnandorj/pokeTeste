import * as React from "react";

import { Background } from "../../components/Background";

import { Container, Text } from "./styles";

export function Pokemon() {
  return (
    <Background>
      <Container>
        <Text>Hello pokemon</Text>
      </Container>
    </Background>
  );
}
