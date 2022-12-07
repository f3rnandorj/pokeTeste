import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: #494949;
  justify-content: space-between;
  flex-direction: row;
  height: ${RFValue(154)}px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(22)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  align-self: flex-start;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PhotoContainer = styled.View`
  background: #fff;
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Photo = styled.Image`
  align-self: center;
  margin-top: ${RFValue(2)}px;
  width: ${RFValue(47)}px;
  height: ${RFValue(47)}px;
  border-radius: ${RFValue(10)}px;
`;
