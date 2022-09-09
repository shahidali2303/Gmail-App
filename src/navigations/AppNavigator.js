import * as React from "react";
import { View, Text, Button } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import MessageNavigator from "./MessageNavigator";
import Social from "../screens/Social";
import CustomDrawer from "../screens/CustomDrawer";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Inbox"
        component={MessageNavigator}
        options={{ drawerType: "front" }}
      />
      <Drawer.Screen
        name="Article"
        component={Article}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Social" component={Social} />
    </Drawer.Navigator>
  );
}
