import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_color,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: theme.fonts.title,
    fontSize: 24,
  },
});
