import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  componentText: {
    marginRight: 215,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardGroup: {
    flex: 1,
  },
  nameContainer: {
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 43,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});
