import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import React from "react";
import { Loading } from "./src/components/Loading";
import theme from "./src/styles/theme";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ThemeProvider theme={theme}>
        {fontLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
