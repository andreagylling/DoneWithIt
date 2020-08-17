import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

export default function AppButton({
  onPress,
  title,
  color = "pistachio",
  textColor = "black",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
    alignSelf: "center",
  },
});
