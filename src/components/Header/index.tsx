import React from "react";

import header from "../../assets/header.png";

import {
  Container,
  TextContainer,
  Title,
  Text,
  AvatarContainer,
  PhotoContainer,
  Photo,
} from "./styles";

export function Header() {
  return (
    <Container>
      <TextContainer>
        <Title>Olá, Ash Ketchum</Title>
        <Text>Bem Vindo!😁</Text>
      </TextContainer>

      <AvatarContainer>
        <PhotoContainer>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/108803562?v=4",
            }}
          />
        </PhotoContainer>
      </AvatarContainer>
    </Container>
  );
}
