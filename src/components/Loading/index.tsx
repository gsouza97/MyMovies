import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../styles/theme";

interface LoadingProps {
  size?: "small" | "large";
}

export function Loading({ size }: LoadingProps) {
  return (
    <ActivityIndicator
      color={theme.colors.text_title}
      size={size ? size : "large"}
      style={{ flex: 1 }}
    />
  );
}
