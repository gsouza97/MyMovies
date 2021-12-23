import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 143,

    justifyContent: "space-between",
    alignItems: "center",

    marginRight: 16,
  },

  poster: {
    height: 212,
    width: "100%",

    borderRadius: 8,

    marginBottom: 12,
  },

  footer: {
    alignItems: "flex-start",
  },

  title: {
    fontFamily: theme.fonts.movie_title,
    fontSize: 14,

    marginBottom: 8,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    fontFamily: theme.fonts.description,
    fontSize: 12,
    color: theme.colors.text_grey,

    marginLeft: 4,
  },
});
