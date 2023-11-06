import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../../colors";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
export interface CardProps {
  productName: string;
  price: number;
  rating: any;
  discountedPrice: number;
  imageSource: any;
}

const Card: React.FC<CardProps> = ({
  productName,
  price,
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
        </View>
        <Text style={styles.productName}>{productName}</Text>

        <View style={styles.pricesContainer}>
          <Text style={styles.price}>{`$ ${price.toFixed(2)}`}</Text>
          {discountedPrice !== undefined && (
            <Text style={styles.discountedPrice}>{`$ ${discountedPrice.toFixed(
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

export default Card;
