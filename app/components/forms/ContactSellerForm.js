import React from "react";
import { Alert, StyleSheet, Keyboard, View } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./index";
import messagesApi from "../../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.sendMessage(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send message, please try again!");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: `${listing.title}`,
      body: "Your message was sent.",
    });
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={(values, formikBag) => handleSubmit(values, formikBag)}
        validationSchema={validationSchema}
      >
        <AppFormField name="message" placeholder="Message" />
        <SubmitButton title="Contact seller" color="lilac" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
