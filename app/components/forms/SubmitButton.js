import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default function SubmitButton({
  title,
  color = "lightgrey",
  textColor = "black",
}) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      color={color}
      textColor={textColor}
      title={title}
      onPress={handleSubmit}
    />
  );
}

const styles = StyleSheet.create({});
