import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light_blue,

    paddingHorizontal: 12,
    paddingVertical: 4,

    borderRadius: 10,
    marginRight: 8,
  },

  title: {
    fontFamily: theme.fonts.movie_title,
    fontSize: 8,
    color: theme.colors.text_blue,

    textTransform: "uppercase",
  },
});
