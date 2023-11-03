import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import ButtonHome from "../../components/Button/ButtonsHome";
import Banner from "../../assets/banner-55%off.png";
import Banner2 from "../../assets/banner-mouses.png";
import Banner3 from "../../assets/Banner-Fones.png";
import Header from "../../components/Header";
import TextHome from "../../components/Text";
import Card from "../../components/Cards/ProductsCard";
import { fetchProductData } from "../../services/api";

export default function Home() {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProductData();
        setData(products);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchData();
  }, []);

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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              productName={item.name}
              price={item.price}
              discountedPrice={item.price - item.discount}
              rating={item.average_rating}
              imageSource={item.imageUrls[0]}
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

        <View style={styles.ImageContainer3}>
          <TouchableOpacity>
            <Image source={Banner3} style={{ width: 350, height: 150 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboard}>
          <TextHome text="MOUSES" style={styles.textHome} />
        </View>
      </ScrollView>
    </>
  );
}
