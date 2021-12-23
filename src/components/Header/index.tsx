import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyMovies</Text>
    </View>
  );
}
