import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const CardComponent: React.FC = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <LinearGradient
          colors={["#5033C3", "rgba(80, 51, 195, 0.20)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <Image
            source={require("../../../assets/imageFone.png")}
            style={styles.cardImage}
          />
        </LinearGradient>
        <View style={styles.nameContainer}>
          <Text style={styles.textCard}>Nome do Card</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;
