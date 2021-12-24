import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
