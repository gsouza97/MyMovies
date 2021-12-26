import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../styles/theme";

export function Loading() {
  return (
    <ActivityIndicator
      color={theme.colors.text_title}
      size="large"
      style={{ flex: 1 }}
    />
  );
}
