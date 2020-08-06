import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <View style={styles.container}>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.flame,
    padding: 10,
    borderRadius: 20,
  },
  error: {
    color: colors.white,
    paddingLeft: 10,
  },
});
