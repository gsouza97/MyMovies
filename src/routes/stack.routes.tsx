import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";
import { TabRoutes } from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Tab"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
