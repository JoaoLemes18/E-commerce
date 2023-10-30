import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

interface HomeIconProps {
  color: string;
  size: number;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color, size }) => {
  return <FeatherIcon name="home" size={18} color={color} />;
};

export default HomeIcon;
