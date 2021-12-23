import React from "react";

import {
  useFonts,
  Merriweather_900Black,
} from "@expo-google-fonts/merriweather";
import {
  Mulish_400Regular,
  Mulish_700Bold,
  Mulish_600SemiBold,
} from "@expo-google-fonts/mulish";

import { Routes } from "./src/routes";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Merriweather_900Black,
    Mulish_400Regular,
    Mulish_700Bold,
    Mulish_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
