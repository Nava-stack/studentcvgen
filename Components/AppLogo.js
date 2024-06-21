import { Image, View } from "react-native";
import React from "react";
import logo from "../assets/logo.png";
import { StyleSheet } from "react-native";

function AppLogo() {
  return (
    <View>
      <Image source={logo} style={styles.logoContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 200,
    width: 200,
  },
});

export default AppLogo;
