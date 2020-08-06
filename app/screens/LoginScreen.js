import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-square-white.png")}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        color="lightgrey"
        title="Sign In"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.lilac,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});
