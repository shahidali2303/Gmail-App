import * as React from "react";
import { View, Text } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}
function Primary() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Primary Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Inbox" component={HomeScreen} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Primary" component={Primary} />
    </Drawer.Navigator>
  );
}
