import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

export default function AppButton({ onPress, title, color = "eggshell" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: "100%",
    height: 60,
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: colors.smoke,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
});
