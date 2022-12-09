import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.Image`
  background: #fff;
  width: ${RFValue(142)}px;
  height: ${RFValue(51)}px;
`;

export const Animation = styled.Image`
  background: #fff;
  width: ${RFValue(89)}px;
  height: ${RFValue(109)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const Text = styled.Text`
  font-size: 11px;
  text-align: center;
  color: #282828;
  /* font-family: "Inter_700Bold"; */
`;
