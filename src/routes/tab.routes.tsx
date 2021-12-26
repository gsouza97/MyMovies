import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../styles/theme";
import { Home } from "../screens/Home";
import { Rated } from "../screens/Rated";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.text_title,
        tabBarInactiveTintColor: theme.colors.text_grey,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Rated}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
