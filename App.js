import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";

const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Main" component={MainScreen} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
