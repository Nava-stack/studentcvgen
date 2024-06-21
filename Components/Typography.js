import { View, Text, StyleSheet } from "react-native";
import React from "react";

function Typography({ text, type, style }) {
  return (
    <View>
      <Text style={[styles[type], style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 27,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 25,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 22,
    fontWeight: "bold",
  },
  h5: {
    fontSize: 17,
    fontWeight: "bold",
  },
  p: {
    fontSize: 17,
  },
});

export default Typography;
