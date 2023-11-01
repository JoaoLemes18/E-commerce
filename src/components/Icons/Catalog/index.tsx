import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

interface CatalogIconProps {
  color: string;
  size: number;
}

const CatalogIcon: React.FC<CatalogIconProps> = ({ color, size }) => {
  return <Icon name="th-large" size={18} color={color} />;
};

export default CatalogIcon;
