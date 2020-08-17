import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import { ListingEditScreen } from "../screens";
import colors from "../config/colors";
import routes from "./routes";
import notification from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  useNotifications(() => {
    notification.navigate(routes.MESSAGES);
  });

  return (
    <Tab.Navigator
      initialRouteName={routes.FEED}
      tabBarOptions={{
        activeTintColor: colors.lilac,
        inactiveTintColor: colors.midtone,
        labelStyle: {
          marginBottom: 10,
          fontSize: 16,
          fontFamily:
            Platform.OS === "android" ? "Roboto" : "AppleSDGothicNeo-Medium",
        },
        style: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
