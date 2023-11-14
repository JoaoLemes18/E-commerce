import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import TitleWithBox from "../../components/Title";
import Header from "../../components/Header";
import CardComponent from "../../components/Cards/Catalog";

const data = [
  {
    id: "1",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "2",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "3",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "4",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "5",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
  {
    id: "6",
    name: "Fones",
    imageSource: require("../../assets/imageFone.png"),
  },
];

const Catalog: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.componentText}>
        <TitleWithBox title="CATÁLOGO" iconName="th-large" />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardComponent />}
      />
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default Catalog;
