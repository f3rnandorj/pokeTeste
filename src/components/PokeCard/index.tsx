import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import {
  Container,
  ContainerLeft,
  Name,
  TypeContainer,
  Title,
  Text,
  ContainerRight,
  TitleId,
  AvatarContainer,
  Avatar,
} from "./styles";

export interface PokeCardProps {
  id: string;
  name: string;
  type: string;
  color: string;
  avatar_url: string;
}

export function PokeCard({ color, name, id, type, avatar_url }: PokeCardProps) {
  return (
    <TouchableOpacity>
      <Container color={color}>
        <ContainerLeft>
          <Name>{name}</Name>
          <TypeContainer>
            <Title>Planta</Title>
            <Text>Venenoso</Text>
          </TypeContainer>
        </ContainerLeft>

        <ContainerRight>
          <TitleId>{id}</TitleId>
          <AvatarContainer>
            <Avatar source={{ uri: avatar_url }} />
          </AvatarContainer>
        </ContainerRight>
      </Container>
    </TouchableOpacity>
  );
}
