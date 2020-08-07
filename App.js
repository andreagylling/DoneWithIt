import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    // <LoginScreen />
    // <RegisterScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <ListingEditScreen />
    // <MessagesScreen />
    <ListingEditScreen />
  );
}
