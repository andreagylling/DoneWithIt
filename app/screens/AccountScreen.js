import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.flame,
    },
    targetScreen: routes.FEED,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.pistachio,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/johndoe.jpg")}
          title="John Doe"
          subtitle="johndoe@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  size={40}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          onPress={() => console.log("Log Out pressed")}
          IconComponent={
            <Icon name="logout" size={40} backgroundColor={colors.lilac} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});
