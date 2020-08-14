import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { AuthNavigator, AppNavigator } from "./app/navigation";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  const restoreAuthToken = async () => {
    const authToken = await authStorage.getToken();
    console.log("authToken from store", authToken);
    if (!authToken) return;
    setUser(jwtDecode(authToken));
  };

  useEffect(() => {
    restoreAuthToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
