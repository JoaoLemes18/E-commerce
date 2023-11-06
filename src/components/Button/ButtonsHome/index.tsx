import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContent}>
        {iconName && <Icon name={iconName} style={styles.icon} />}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonHome;
