import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, AppNavigator } from "./app/navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
