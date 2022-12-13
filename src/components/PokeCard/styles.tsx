import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${RFValue(158)}px;
  height: ${RFValue(100)}px;
  background: ${({ color }) => (color ? color : "#d8d8d8")};
  border-radius: 15px;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  margin: ${RFValue(3)}px;
`;

export const ContainerType = styled.View`
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Inter_600SemiBold";
  color: #fff;
  align-self: center;
  padding: ${RFValue(23)}px 0 ${RFValue(5)}px ${RFValue(10)}px;
`;

export const PokemonType = styled.View``;

export const ContainerAvatar = styled.View`
  flex: 1;
`;

export const PokemonId = styled.Text`
  align-self: flex-end;
  font-size: ${RFValue(18)}px;
  padding: ${RFValue(10)}px ${RFValue(8)}px 0 0;
  color: #fff;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: "contain",
})`
  flex: 1;
`;
