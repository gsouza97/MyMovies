import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 80,

    marginRight: 16,
  },

  actorImage: {
    height: 76,
    width: "100%",

    borderRadius: 8,

    marginBottom: 4,
  },

  actorName: {
    fontFamily: theme.fonts.description,
    fontSize: 12,
    color: theme.colors.text_title,
  },
});
