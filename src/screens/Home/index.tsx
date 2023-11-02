import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "../../colors";
import ButtonHome from "../../components/Button/ButtonsHome";
import Banner from "../../../assets/banner-55%off.png";
import Header from "../../components/Header";
import TextHome from "../../components/Text";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.ImageContainer}>
        <TouchableOpacity>
          <Image source={Banner} style={{ width: 350, height: 150 }} />
        </TouchableOpacity>
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
      <TextHome text="Ofertas" style={styles.textHome} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  ImageContainer: {
    margin: 19,
    marginBottom: 65,
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
});
