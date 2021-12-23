import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is Home</Text>
    </SafeAreaView>
  );
}
