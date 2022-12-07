import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: #494949;
  height: 154px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  padding: ${RFValue(76)}px 0 54px 22px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const AvatarContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
`;

export const Photo = styled.Image`
  width: ${RFValue(47)}px;
  height: ${RFValue(47)}px;
`;
