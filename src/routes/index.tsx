import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { useAuth } from "../hooks/useAuth";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <StackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
