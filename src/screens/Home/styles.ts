import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  ImageContainer1: {
    marginBottom: 25,
    alignItems: "center",
  },
  ImageContainer2: {
    top: 10,

    margin: 19,
    alignItems: "center",
  },
  ImageContainer3: {
    top: 10,
    margin: 19,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonColumn: {
    flex: 1,
    alignItems: "center",
  },
  textHome: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.whiteColor,
    marginLeft: 20,
  },
  keyboard: {},
});
