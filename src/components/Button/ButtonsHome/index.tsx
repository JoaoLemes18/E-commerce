import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

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

export default ButtonHome;
