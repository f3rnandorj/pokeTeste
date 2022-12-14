import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  color: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: "Inter_600SemiBold";
  font-size: 24px;
  padding: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const List = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.Text<ContainerProps>`
  background: ${({ color }) => (color ? color : "#d8d8d8")};
  font-size: ${RFValue(13)}px;
  width: ${RFValue(45)}px;
  height: ${RFValue(19)}px;
  border-radius: ${RFValue(38)}px;
  color: #fff;
  text-align: center;
  margin-bottom: ${RFValue(4)}px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const Img = styled.Image``;
