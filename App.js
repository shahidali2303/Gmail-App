import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import navigationTheme from "./src/components/navigationTheme";
import "react-native-gesture-handler";
import AppNavigator from "./src/navigations/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import MessageNavigator from "./src/navigations/MessageNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
    // <View>
    //   <Text>ajbndfklajilf</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
