import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface GenreIconProps {
  title: string;
  color?: string;
}

export function GenreIcon({ title, color }: GenreIconProps) {
  return (
    <View style={color ? { backgroundColor: color } : styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
