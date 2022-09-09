import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "../components/Header";

export default function Social({ navigation }) {
  return (
    <View>
      <Header onPress={() => navigation.openDrawer()} />
      {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
    </View>
  );
}
