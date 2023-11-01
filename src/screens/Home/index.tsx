import { StyleSheet, View, Image } from "react-native";
import { colors } from "../../colors";
import ButtonHome from "../../components/Button/ButtonsHome";
import Banner from "../../../assets/banner-55%off.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image source={Banner} style={{ width: 350, height: 150 }} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonColumn}>
          <ButtonHome title="Teclados" iconName="" />
          <ButtonHome title="Fones" iconName="" />
          <ButtonHome title="Monitores" iconName="" />
        </View>
        <View style={styles.buttonColumn}>
          <ButtonHome title="Mouses" iconName="" />
          <ButtonHome title="Mousespads" iconName="" />
          <ButtonHome title="Speakers" iconName="" />
        </View>
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
    marginBottom: 75,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonColumn: {
    flex: 1,
    alignItems: "center",
  },
});
