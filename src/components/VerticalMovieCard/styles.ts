import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: "100%",
    height: 128,

    paddingRight: 24,
    marginBottom: 8,
  },

  poster: {
    width: 85,
    height: "100%",

    borderRadius: 8,
  },

  movieInfo: {
    alignItems: "flex-start",

    marginLeft: 16,
  },

  title: {
    fontFamily: theme.fonts.movie_title,
    fontSize: 14,

    marginBottom: 8,
  },

  rating: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  ratingText: {
    fontFamily: theme.fonts.description,
    fontSize: 12,
    color: theme.colors.text_grey,

    marginLeft: 4,
    marginBottom: 8,
  },

  genres: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 8,
  },

  duration: {
    flexDirection: "row",
    alignItems: "center",
  },

  durationText: {
    fontFamily: theme.fonts.description,
    fontSize: 12,

    marginLeft: 4,
  },
});
