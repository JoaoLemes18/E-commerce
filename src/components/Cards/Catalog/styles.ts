import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 310,
    marginLeft: 20,
    top: 10,
    marginBottom: -90,
  },
  card: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 43,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  textCard: {
    top: 10,
    color: colors.whiteColor,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  cardImage: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
});
