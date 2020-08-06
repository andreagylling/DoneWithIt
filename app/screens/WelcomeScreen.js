import React from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcomeBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-square-black.png")}
        />
        <AppText style={styles.text}>Sell What You Don't Need</AppText>
      </View>
      <AppButton title="Sign In" onPress={() => console.log("sign in")} />
      <AppButton
        title="Create Account"
        onPress={() => console.log("create account")}
        color="pistachio"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  text: {
    padding: 10,
  },
});
