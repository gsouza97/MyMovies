import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_color,
  },

  body: {
    flex: 1,
    width: "100%",

    marginTop: 16,
  },
});