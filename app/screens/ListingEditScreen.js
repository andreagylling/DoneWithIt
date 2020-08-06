import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormPicker,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    icon: "sofa",
    backgroundColor: "#9DC5BB",
    value: 1,
  },
  {
    label: "Clothing",
    icon: "tshirt-crew",
    backgroundColor: "#335145",
    value: 2,
  },
  {
    label: "Books",
    icon: "book",
    backgroundColor: "#8FBB63",
    value: 3,
  },
  {
    label: "Cameras",
    icon: "camera",
    backgroundColor: "#C19AB2",
    value: 4,
  },
  {
    label: "Home Decor",
    icon: "lava-lamp",
    backgroundColor: "#592941",
    value: 5,
  },
  {
    label: "Music",
    icon: "music",
    backgroundColor: "#FFB563",
    value: 6,
  },
  {
    label: "Miscellane-ous",
    icon: "dots-horizontal",
    backgroundColor: "#90C2E7",
    value: 7,
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={225}
          name="title"
          placeholder="Title"
          autoCapitalize="sentences"
          autoCorrect={true}
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="40%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="60%"
        />
        <AppFormField
          maxLength={225}
          multiline
          name="description"
          placeholder="Description"
          autoCapitalize="sentences"
          autoCorrect={true}
          numberOfLines={3}
        />
        <SubmitButton title="Post" color="pistachio" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
