import React from "react";
import Feather from "react-native-vector-icons/Feather";

interface RequestsProps {
  color: string;
  size: number;
}

const Requests: React.FC<RequestsProps> = ({ color, size }) => {
  return <Feather name="shopping-bag" size={18} color="black" />;
};

export default Requests;
