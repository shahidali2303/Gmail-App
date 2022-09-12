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
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Promotional({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Promotional Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting Screen</Text>

      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
function Send({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Send Mail Screen</Text>

      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
function Trash({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Trash Screen</Text>

      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
function Starred({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Starred Screen</Text>

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
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Primary"
        component={MessageNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Social"
        component={Social}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Promotional"
        component={Promotional}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="tag" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Send Mails"
        component={Send}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="send" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Starred"
        component={Starred}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="star" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Trash"
        component={Trash}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="trash-2" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
