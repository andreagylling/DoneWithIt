import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "AppleSDGothicNeo-UltraLight",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
