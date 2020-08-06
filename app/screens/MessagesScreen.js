import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis risus in urna cursus dictum. Vestibulum euismod libero in leo efficitur, et dapibus dolor interdum. Pellentesque interdum cursus metus, nec lobortis odio congue a.",
    image: require("../assets/johndoe.jpg"),
  },
  {
    id: 2,
    title: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis risus in urna cursus dictum. Vestibulum euismod libero in leo efficitur, et dapibus dolor interdum. Pellentesque interdum cursus metus, nec lobortis odio congue a.",
    image: require("../assets/janedoe.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            showChevron={true}
            onPress={() => console.log("Message selected: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Jane Doe",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis risus in urna cursus dictum. Vestibulum euismod libero in leo efficitur, et dapibus dolor interdum. Pellentesque interdum cursus metus, nec lobortis odio congue a.",
              image: require("../assets/janedoe.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
