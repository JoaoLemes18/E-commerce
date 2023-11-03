import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface CardProps {
  productName: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  imageSource: any; // Você pode ajustar o tipo da imagem conforme necessário
}

const Card: React.FC<CardProps> = ({
  productName,
  price,
  discountedPrice,
  rating,
  imageSource,
}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.price}>{`R$ ${price.toFixed(2)}`}</Text>
        {discountedPrice !== undefined && (
          <Text style={styles.discountedPrice}>{`R$ ${discountedPrice.toFixed(
            2
          )}`}</Text>
        )}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{`${rating} ⭐`}</Text>
        </View>
      </View>
      <Text style={styles.productName}>{productName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 156,
    height: 170,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    alignItems: "center",
  },
  productName: {
    color: "white",
    fontSize: 16,
  },
  price: {
    color: "white",
    fontSize: 14,
  },
  discountedPrice: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  rating: {
    color: "#8162FF",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Card;
