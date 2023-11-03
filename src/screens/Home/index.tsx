import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { colors } from "../../colors";
import ButtonHome from "../../components/Button/ButtonsHome";
import Banner from "../../assets/banner-55%off.png";
import Banner2 from "../../assets/banner-mouses.png";
import Banner3 from "../../assets/Banner-Fones.png";
import Header from "../../components/Header";
import TextHome from "../../components/Text";
import Card from "../../components/Cards/ProductsCard"; // Certifique-se de importar o componente Card a partir do caminho correto

const data = [
  {
    id: "1",
    productName: "G Pro X Superlight",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.5,
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "2",
    productName: "Cloud Stinger 2",
    price: 29.99,
    rating: 4.0,
    imageSource: require("../../assets/imageMouse.png"),
  },
  {
    id: "3",
    productName: "G Pro X Superlight",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.5,
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "4",
    productName: "G Pro X Superlight",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.5,
    imageSource: require("../../assets/imageFone.png"),
  },
];

export default function Home() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.ImageContainer1}>
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
        <TextHome text="OFERTAS" style={styles.textHome} />
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              productName={item.productName}
              price={item.price}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              imageSource={item.imageSource}
            />
          )}
        />
        <View style={styles.ImageContainer2}>
          <TouchableOpacity>
            <Image source={Banner2} style={{ width: 350, height: 150 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboard}>
          <TextHome text="TECLADOS" style={styles.textHome} />
        </View>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              productName={item.productName}
              price={item.price}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              imageSource={item.imageSource}
            />
          )}
        />
        <View style={styles.ImageContainer3}>
          <TouchableOpacity>
            <Image source={Banner3} style={{ width: 350, height: 150 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboard}>
          <TextHome text="MOUSES" style={styles.textHome} />
        </View>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              productName={item.productName}
              price={item.price}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              imageSource={item.imageSource}
            />
          )}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  ImageContainer1: {
    margin: 19,
    marginBottom: 25,
    left: 10,
  },
  ImageContainer2: {
    margin: 19,
    left: 10,
  },
  ImageContainer3: {
    margin: 19,
    left: 10,
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
