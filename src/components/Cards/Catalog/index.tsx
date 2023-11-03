import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../colors";

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

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 310,
    marginLeft: 20,
    top: 10,
    marginBottom: -90,
  },
  card: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 43,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  textCard: {
    top: 10,
    color: colors.whiteColor,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  cardImage: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
});

export default CardComponent;
