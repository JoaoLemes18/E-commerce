import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather"; // Importe o ícone Feather

import Home from "../screens/Home";
import HomeIcon from "../components/Icons/Home";

import Catalog from "../screens/Catalog";
import CatalogIcon from "../components/Icons/Catalog";

import Cart from "../screens/Cart";
import CartIcon from "../components/Icons/Cart";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarLabel: "Catalog",
            tabBarIcon: ({ color, size }) => (
              <CatalogIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <CartIcon color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
