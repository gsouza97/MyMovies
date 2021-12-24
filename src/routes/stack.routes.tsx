import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
