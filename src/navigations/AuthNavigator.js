import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import LoginScreen from "../screens/LoginScreen";
import GetStarted from "../screens/GetStarted";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "../../firebase";
import AppNavigator from "./AppNavigator";
import RegisterScreen from "../screens/RegisterScreen";

function WelcomeScreen({ navigation }) {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Email : {auth.currentUser?.email}</Text>

      <Button title="Log Out" onPress={handleSignOut} />
    </View>
  );
}

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Get Started"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Sign up" }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
