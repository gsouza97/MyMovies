import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import theme from "../../styles/theme";

import { styles } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type: "apple" | "google";
}

export function LoginButton({ title, type, ...rest }: Props) {
  return (
    <RectButton
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor:
            type === "apple"
              ? theme.colors.button_dark
              : theme.colors.button_white,
        },
      ]}
    >
      {type === "apple" ? <AppleSvg /> : <GoogleSvg />}
      <Text
        style={[
          styles.text,
          {
            color:
              type === "apple"
                ? theme.colors.text_white
                : theme.colors.text_dark,
          },
        ]}
      >
        {title}
      </Text>
    </RectButton>
  );
}
