import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: "row",
    borderColor: colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "transparent",
    width: 168,
    marginBottom: 18,
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
    top: 2,
    color: colors.whiteColor,
  },
  icon: {
    fontSize: 18,
    color: colors.whiteColor,
    marginRight: 8,
  },
});
