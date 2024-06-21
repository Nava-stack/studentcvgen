import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

function AppButton({ text, type }) {
  return (
    <TouchableOpacity style={styles[type]}>
      <Text
        style={
          type == "s1"
            ? { color: "white", fontWeight: "bold" }
            : { color: "#008DDA", fontWeight: "bold" }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  s1: {
    padding: 15,
    backgroundColor: "#008DDA",
    marginTop: 20,
    width: 70 + "%",
    borderRadius: 30,
    alignItems: "center",
  },
  s2: {
    padding: 15,
    marginTop: 20,
    borderColor: "#008DDA",
    borderWidth: 2,
    width: 70 + "%",
    borderRadius: 30,
    alignItems: "center",
  },
});

export default AppButton;
