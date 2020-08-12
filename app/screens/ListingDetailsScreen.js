import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        preview={{ uri: listing.images[0].thumbnailUrl }}
        style={styles.image}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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
    height: 400,
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
