import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "transparent",
    width: 168,
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.whiteColor,
  },
  buttonMargin: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
    color: colors.whiteColor,
    marginRight: 8,
  },
});
