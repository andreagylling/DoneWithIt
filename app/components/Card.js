import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ title, subtitle, imageUrl, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={4} style={styles.subtitle}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: colors.smoke,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.pistachio,
    fontWeight: "bold",
  },
});
