import React from "react";

import header from "../../assets/header.png";

import {
  Container,
  Text,
  TextContainer,
  Title,
  AvatarContainer,
  Photo,
} from "./styles";

export function Header() {
  return (
    <Container>
      <TextContainer>
        <Title>Olá, Ash Ketchum</Title>
        <Text>Bem Vindo!</Text>
      </TextContainer>

      <AvatarContainer>
        <Photo
          source={{
            uri: "https://avatars.githubusercontent.com/u/108803562?v=4",
          }}
        />
      </AvatarContainer>
    </Container>
  );
}
