import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: "48%",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 30,
    marginBottom: 110,
  },

  text: {
    fontFamily: theme.fonts.title,
    fontSize: 30,
    lineHeight: 40,
    textAlign: "center",
  },

  footer: {
    height: "20%",

    marginHorizontal: 24,

    borderRadius: 20,
    padding: 16,
    justifyContent: "space-around",

    backgroundColor: theme.colors.background_color,
  },
});
