import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,

    backgroundColor: theme.colors.background_color,

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,
  },
});
