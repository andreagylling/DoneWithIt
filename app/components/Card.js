import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={4} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </View>
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
