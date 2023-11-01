import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import { colors } from "../../colors";
import Logo from "../../../assets/FSW_Store.png";
export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={Logo} resizeMode="cover" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
