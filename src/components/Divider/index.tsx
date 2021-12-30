import React from "react";
import { View } from "react-native";
import theme from "../../styles/theme";

export function Divider() {
  return (
    <View
      style={{
        width: "100%",
        height: 1.5,
        backgroundColor: theme.colors.text_title,
        marginVertical: 12,
        opacity: 0.3,
      }}
    ></View>
  );
}
