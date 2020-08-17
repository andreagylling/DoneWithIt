import React from "react";
import { Image } from "react-native-expo-image-cache";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";

import AppText from "../components/AppText";
import { ContactSellerForm } from "../components/forms";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
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
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
    backgroundColor: colors.white,
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
    marginVertical: 10,
  },
});
