import logo from "../../assets/logo.png";
import pokeball from "../../assets/pokeball.png";

import { Container, Img, Animation, Text } from "./styles";

export function Background() {
  return (
    <Container>
      <Img source={logo} />
      <Animation source={pokeball} />
      <Text>Carregando...</Text>
    </Container>
  );
}
