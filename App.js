import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";
import { AuthNavigator, AppNavigator } from "./app/navigation";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  const restoreAuthToken = async () => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    setUser(jwtDecode(authToken));
  };

  if (!ready)
    return (
      <AppLoading
        startAsync={restoreAuthToken}
        onFinish={() => setReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
