import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormPicker,
  AppFormField,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
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
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return Alert.alert("Could not save the listing.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values, formikBag) => handleSubmit(values, formikBag)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
        <SubmitButton title="Post" color="pistachio" textColor="white" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
