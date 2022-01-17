import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 56,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,

    // marginBottom: 16,
  },

  text: {
    fontFamily: theme.fonts.description,
    fontSize: 20,

    marginLeft: 15,
  },
});
