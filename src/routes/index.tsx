import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import HomeIcon from "../components/Icons/Home";

import Catalog from "../screens/Catalog";
import CatalogIcon from "../components/Icons/Catalog";

import Cart from "../screens/Cart";
import CartIcon from "../components/Icons/Cart";
import { colors } from "../colors";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",

          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: colors.primaryColor,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,

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
export default TabRoutes;
