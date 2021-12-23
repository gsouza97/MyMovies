import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.yellow,

    marginBottom: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 16,
    marginHorizontal: 24,
  },

  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,
  },
});
