import {
  Container,
  ContainerType,
  Name,
  PokemonType,
  ContainerAvatar,
  PokemonId,
  Avatar,
} from "./styles";

export interface PokeTypes {
  name: string;
  typeColor: string;
  types: string;
}

export interface PokeCardProps {
  id: string;
  name: string;
  types?: string[];
  backgroundColor: string;
  avatar: string;
}

export function PokeCard({
  backgroundColor,
  name,
  id,
  types,
  avatar,
}: PokeCardProps) {
  return (
    <Container onPress={() => {}} color={backgroundColor}>
      <ContainerType>
        <Name>{name}</Name>
        <PokemonType color={backgroundColor}>{types}</PokemonType>
      </ContainerType>

      <ContainerAvatar>
        <PokemonId># {id}</PokemonId>
        <Avatar source={{ uri: avatar }} />
      </ContainerAvatar>
    </Container>
  );
}
