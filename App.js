import { StyleSheet, Text, View } from "react-native";
import AppLogo from "./Components/AppLogo";
import Typography from "./Components/Typography";
import AppButton from "./Components/AppButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AppLogo />
      <Typography text={"Generate your CV with CVGen"} type={"h4"} />
      <AppButton text={"SignUp"} type={"s1"} />
      <AppButton text={"Login"} type={"s2"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoDescription: {
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 25,
  },
});
