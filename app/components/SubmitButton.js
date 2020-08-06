import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../components/AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton color="lightgrey" title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
