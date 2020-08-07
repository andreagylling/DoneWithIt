import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen, LoginScreen, RegisterScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();
export default AuthNavigator = () => (
  <Stack.Navigator initialRouteName={routes.WELCOME}>
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.REGISTER}
      component={RegisterScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
