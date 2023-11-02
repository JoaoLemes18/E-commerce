import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>FSW Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: colors.secondaryColor,
    marginTop: 75,
    marginBottom: 25,
    borderBottomWidth: 2,
  },
  logo: {
    bottom: 15,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.whiteColor,
  },
});
