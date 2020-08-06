import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close-circle-outline"
        size={30}
        color={colors.eggshell}
        style={styles.closeIcon}
      />
      <MaterialCommunityIcons
        name="delete-outline"
        size={30}
        color={colors.eggshell}
        style={styles.deleteIcon}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.smoke,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    marginVertical: 10,
  },
});
