import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    backgroundColor: theme.colors.background_color,
  },

  backgroundImage: {
    width: "100%",
    height: "40%",

    position: "absolute",
  },

  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  movieDetail: {
    height: "70%",
    width: "100%",
    backgroundColor: theme.colors.background_color,

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    paddingBottom: 24,
    // marginTop: -20,

    top: "25%",
  },

  movieTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginBottom: 16,
    marginTop: 24,
    paddingHorizontal: 24,
  },

  wrapper: {
    width: "60%",
  },

  name: {
    fontFamily: theme.fonts.movie_title,
    fontSize: 20,

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

  genres: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 24,
    marginBottom: 16,
  },

  movieInfo: {
    flexDirection: "row",
    width: "90%",

    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,
    paddingHorizontal: 24,
  },

  infoTitle: {
    fontFamily: theme.fonts.description,
    fontSize: 12,
    color: theme.colors.text_grey,

    marginBottom: 4,
  },

  infoSubtitle: {
    fontFamily: theme.fonts.movie_details,
    fontSize: 12,
  },

  description: {
    width: "100%",
    alignItems: "flex-start",

    marginBottom: 24,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,

    marginBottom: 8,
  },

  descriptionText: {
    fontFamily: theme.fonts.description,
    fontSize: 14,
    lineHeight: 22,

    textAlign: "justify",

    color: theme.colors.text_grey,
  },

  cast: {
    marginBottom: 24,
  },

  castTitle: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,

    marginBottom: 8,
    paddingHorizontal: 24,
  },

  relatedMovies: {},

  relatedTitle: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,

    marginBottom: 8,
    paddingHorizontal: 24,
  },
});
