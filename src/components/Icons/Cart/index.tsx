import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

interface CartIconProps {
  color: string;
  size: number;
}

const CartIcon: React.FC<CartIconProps> = ({ color, size }) => {
  return <FeatherIcon name="shopping-cart" size={22} color={color} />;
};

export default CartIcon;
