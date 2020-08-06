import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/yellowjacket.jpg")}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Yellow jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/johndoe.jpg")}
            title="John Doe"
            subtitle="25 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: colors.smoke,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  price: {
    color: colors.pistachio,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});
