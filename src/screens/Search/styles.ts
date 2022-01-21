import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_color,
  },

  header: {
    height: 60,
    paddingHorizontal: 24,

    justifyContent: "center",
  },

  headerTitle: {
    fontFamily: theme.fonts.title,
    fontSize: 24,
    color: theme.colors.text_title,
  },

  search: {
    flexDirection: "row",
    // alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 4,
    borderRadius: 10,

    backgroundColor: theme.colors.text_white,
  },

  inputField: {
    flex: 1,
    fontSize: 14,

    paddingHorizontal: 12,

    color: theme.colors.text_dark,
  },

  inputButton: {
    padding: 12,
    borderRadius: 10,

    backgroundColor: theme.colors.button_dark,
    // borderBottomEndRadius: 10,
  },

  movieList: {
    flex: 1,
    justifyContent: "center",

    // backgroundColor: "blue",
  },

  noMovieText: {
    fontFamily: theme.fonts.description,
    fontSize: 14,
    color: theme.colors.text_grey,

    alignSelf: "center",
  },
});
