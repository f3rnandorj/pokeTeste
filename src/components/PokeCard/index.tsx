import {
  Container,
  ContainerType,
  Name,
  PokemonType,
  ContainerAvatar,
  PokemonId,
  Avatar,
} from "./styles";

export interface PokeCardProps {
  id: string;
  name: string;
  types: [
    type: {
      name: string;
      color: string;
    }
  ];
  backgroundColor: string;
  avatar: string;
  onPress: () => void;
}

export function PokeCard({
  backgroundColor,
  name,
  id,
  types,
  avatar,
  onPress,
}: PokeCardProps) {
  return (
    <Container onPress={onPress} color={backgroundColor}>
      <ContainerType>
        <Name>{name}</Name>
        <PokemonType color={types[0].color}>{types[0].name}</PokemonType>
      </ContainerType>

      <ContainerAvatar>
        <PokemonId># {id}</PokemonId>
        <Avatar source={{ uri: avatar }} />
      </ContainerAvatar>
    </Container>
  );
}
