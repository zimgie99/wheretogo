import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
  return (
    <View>
      <Text style={styles.container}>MainScreen 2</Text>
      <Text >MainScreen 2</Text>
      <Text style={styles.container}>MainScreen 2</Text>
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
});
