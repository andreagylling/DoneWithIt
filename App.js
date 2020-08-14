import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, AppNavigator } from "./app/navigation";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
