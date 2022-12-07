import { View } from "react-native";
import logo from "../../assets/logo.png";
import pokeball from "../../assets/pokeball.png";

import { Container, Img, Animation, Text } from "./styles";

export function Loading() {
  return (
    <Container>
      <Img source={logo} />
      <View style={{ alignItems: "center" }}>
        <Animation source={pokeball} />
        <Text>CARREGANDO...</Text>
      </View>
    </Container>
  );
}
