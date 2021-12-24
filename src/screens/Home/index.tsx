import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Header } from "../../components/Header";
import { NowShowing } from "../../components/NowShowing";
import { Popular } from "../../components/Popular";

import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <NowShowing />
        <Popular />
      </View>
    </SafeAreaView>
  );
}
