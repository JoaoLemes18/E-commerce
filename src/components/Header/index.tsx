import { StyleSheet, Image, View } from "react-native";
import { colors } from "../../colors";

export default function Header() {
  return <View style={styles.header}></View>;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
