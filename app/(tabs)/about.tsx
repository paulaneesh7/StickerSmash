import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function AboutScreen() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>About Screeen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    marginTop: 20,
    color: 'red',
    fontSize: 20,
    textDecorationLine: "underline"
  }
});
