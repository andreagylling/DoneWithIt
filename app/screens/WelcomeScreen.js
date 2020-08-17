import React from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
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
      <View style={styles.buttonContainer}>
        <AppButton
          title="Sign In"
          onPress={() => navigation.navigate(routes.LOGIN)}
          textColor="white"
        />
        <AppButton
          title="Create Account"
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="white"
          textColor="pistachio"
        />
      </View>
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
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
});
