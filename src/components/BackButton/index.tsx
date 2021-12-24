import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../styles/theme";

export function BackButton({ ...rest }: BorderlessButtonProps) {
  return (
    <BorderlessButton {...rest}>
      <MaterialIcons
        name="arrow-back"
        size={24}
        color={theme.colors.background_color}
      />
    </BorderlessButton>
  );
}
