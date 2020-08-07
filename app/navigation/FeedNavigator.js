import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ListingsScreen, ListingDetailsScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.LISTINGS}
      component={ListingsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
