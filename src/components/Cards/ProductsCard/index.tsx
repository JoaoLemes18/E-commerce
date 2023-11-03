import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../../colors";
import { TouchableOpacity } from "react-native";

interface CardProps {
  productName: string;
  price: number;
  discountedPrice?: number;
  discountedPriceP?: boolean;
  rating: number;
  imageSource: any;
}

const Card: React.FC<CardProps> = ({
  productName,
  price,
  discountedPriceP, //porcentagem
  discountedPrice,
  rating,
  imageSource,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}></View>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>{discountedPriceP}</Text>
          </View>
        </View>
        <Text style={styles.productName}>{productName}</Text>

        <View style={styles.pricesContainer}>
          <Text style={styles.price}>{`R$ ${price.toFixed(2)}`}</Text>
          {discountedPrice !== undefined && (
            <Text style={styles.discountedPrice}>{`R$ ${discountedPrice.toFixed(
              2
            )}`}</Text>
          )}
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{`${rating} ⭐`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 13,
  },
  card: {
    width: 156,
    height: 140,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    padding: 10,

    alignItems: "center",
  },
  image: {
    top: 20,
    alignItems: "center",
    height: 80,
  },
  discountContainer: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  discountText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContent: {
    alignItems: "center",
  },
  pricesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: colors.whiteColor,
    fontSize: 16,
    marginTop: 4,
    fontWeight: "bold",
  },
  discountedPrice: {
    marginRight: 38,
    color: colors.textColor,
    marginTop: 4,
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  rating: {
    color: colors.accentColor,
    fontSize: 16,
    marginTop: 4,
    marginLeft: 5,
  },
  productName: {
    marginTop: 13,
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Card;
