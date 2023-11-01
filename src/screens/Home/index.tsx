import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../colors";
import ButtonsHome from "../../components/Button/ButtonsHomes";
import Banner from "../../../assets/banner-55%off.png";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image source={Banner} style={{ width: 350, height: 150 }} />
      </View>
      <View>
        <ButtonsHome title="Mouse" />
      </View>
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
  ImageContainer: {
    marginBottom: 280,
  },
});
