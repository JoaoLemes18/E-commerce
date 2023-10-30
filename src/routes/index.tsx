import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/Home";
import Catalog from "../screens/Catalog";
import Cart from "../screens/Cart";

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
              <Icon name="home" size={size} color={color} />
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
              <Icon name="list" size={size} color={color} />
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
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
