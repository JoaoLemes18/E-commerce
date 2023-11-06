import React, { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, StyleSheet } from "react-native";
import { styles } from "./styles";
import TitleWithBox from "../../components/Title";
import Header from "../../components/Header";
import CardComponent from "../../components/Cards/Catalog";

interface Product {
  id: number;
  category: string;
  imageUrl: string;
}

const Catalog: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://json-rose-five.vercel.app/products")
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((item: Product) => item.category)),
        ];
        const filteredCategories = uniqueCategories.slice(0, 5);
        setCategories(filteredCategories);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados da API", error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.componentText}>
        <TitleWithBox title="CATÁLOGO" iconName="th-large" />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardGroup}>
          {categories.slice(0, 3).map((category) => (
            <CardComponent
              key={category}
              category={category}
              imageSource={{
                uri: getFirstImageForCategory(products, category),
              }}
            />
          ))}
        </View>
        <View style={styles.cardGroup}>
          {categories.slice(3, 6).map((category) => (
            <CardComponent
              key={category}
              category={category}
              imageSource={{
                uri: getFirstImageForCategory(products, category),
              }}
            />
          ))}
        </View>
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
};

function getFirstImageForCategory(products: Product[], category: string) {
  const product = products.find((item) => item.category === category);
  return product ? product.imageUrl : "";
}

export default Catalog;
