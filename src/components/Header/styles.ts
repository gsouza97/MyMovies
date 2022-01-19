import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingHorizontal: 24,
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },

  userImage: {
    height: 34,
    width: 34,

    borderRadius: 17,
  },

  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    color: theme.colors.text_title,
  },
});
