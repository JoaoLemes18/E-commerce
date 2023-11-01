import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SimpleLineIcons } from "@expo/vector-icons";

import { colors } from "../../../colors";

interface ButtonHomeProps {
  title: string;
  iconName?: string;
  onPress?: () => void;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({
  title,
  iconName,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.buttonMargin]}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {iconName && <Icon name={iconName} style={styles.icon} />}
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "transparent",
    width: 168,
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.whiteColor,
  },
  buttonMargin: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
    color: colors.whiteColor,
    marginRight: 8,
  },
});

export default ButtonHome;
