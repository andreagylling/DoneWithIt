import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <MessagesScreen />
    // <AccountScreen />
    <ListingsScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Yellow jacket for sale"
    //     subtitle="$100"
    //     image={require("./app/assets/yellowjacket.jpg")}
    //   />
    // </View>
  );
}
