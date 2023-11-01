import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../colors";

interface TitleWithBoxProps {
  title: string;
  iconName?: string;
}

const TitleWithBox: React.FC<TitleWithBoxProps> = ({ title, iconName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        {iconName && <Icon name={iconName} style={styles.icon} />}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {
    flexDirection: "row",
    borderColor: colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.whiteColor,
  },
  icon: {
    fontSize: 18,
    color: colors.whiteColor,
  },
});

export default TitleWithBox;
