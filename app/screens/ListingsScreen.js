import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Yellow leather jacket",
    price: 100,
    image: require("../assets/yellowjacket.jpg"),
  },
  {
    id: 2,
    title: "Ceramic parrot home decor",
    price: 250,
    image: require("../assets/ceramicparrot.jpg"),
  },
  {
    id: 3,
    title: "Lime lamp and button stool",
    price: 95,
    image: require("../assets/limelampbuttonstool.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.lightgrey,
  },
});
