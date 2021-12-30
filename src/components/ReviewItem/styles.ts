import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  review: {},

  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15,

    marginRight: 8,
  },

  username: {
    fontFamily: theme.fonts.movie_details,
    fontSize: 14,
  },

  text: {
    fontFamily: theme.fonts.description,
    fontSize: 14,
    color: theme.colors.text_grey,

    textAlign: "justify",
  },
});
