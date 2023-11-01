import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors";
import Header from "../../components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
