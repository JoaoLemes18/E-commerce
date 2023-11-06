import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import axios from "axios";

import { styles } from "./styles";
import ButtonHome from "../../components/Button/ButtonsHome";
import Banner from "../../assets/banner-55%off.png";
import Banner2 from "../../assets/banner-mouses.png";
import Banner3 from "../../assets/Banner-Fones.png";
import Header from "../../components/Header";
import TextHome from "../../components/Text";
import Card from "../../components/Cards/ProductsCard";
interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  average_rating: number;
  imageUrls: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://json-rose-five.vercel.app/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados da API", error);
      });
  }, []);

  // Organizar os produtos por categoria
  const categorizedProducts: Record<string, Product[]> = {};

  products.forEach((product) => {
    const { category } = product;
    if (!categorizedProducts[category]) {
      categorizedProducts[category] = [];
    }
    categorizedProducts[category].push(product);
  });
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
            <ButtonHome title="Teclados" iconName="keyboard-o" />
            <ButtonHome title="Fones" iconName="headphones" />
            <ButtonHome title="Monitores" iconName="desktop" />
          </View>
          <View style={styles.buttonColumn}>
            <ButtonHome title="Mouses" iconName="mouse-pointer" />
            <ButtonHome title="Mousespads" iconName="square-o" />
            <ButtonHome title="Speakers" iconName="volume-up" />
          </View>
        </View>
        <TextHome text="OFERTAS" style={styles.textHome} />
        <FlatList
          data={products}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              productName={item.name}
              price={item.price}
              discountedPrice={item.price - item.discount}
              rating={item.average_rating}
              imageSource={{ uri: item.imageUrls[0] }}
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
          <FlatList
            data={categorizedProducts["Keyboard"]}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                productName={item.name}
                price={item.price}
                discountedPrice={item.price - item.discount}
                rating={item.average_rating}
                imageSource={{ uri: item.imageUrls[0] }}
              />
            )}
          />
        </View>

        <View style={styles.ImageContainer3}>
          <TouchableOpacity>
            <Image source={Banner3} style={{ width: 350, height: 150 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboard}>
          <TextHome text="MOUSES" style={styles.textHome} />
          <FlatList
            data={categorizedProducts["Mouse"]}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                productName={item.name}
                price={item.price}
                discountedPrice={item.price - item.discount}
                rating={item.average_rating}
                imageSource={{ uri: item.imageUrls[0] }}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
}
