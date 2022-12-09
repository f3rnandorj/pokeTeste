import styled from "styled-components/native";
import { FlatList } from "react-native";
import { PokeCardProps } from "../../components/PokeCard";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: "Inter_600SemiBold";
  font-size: 24px;
  padding: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const List = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const Img = styled.Image``;
