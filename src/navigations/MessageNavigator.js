import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

import MessageDetalScreen from "../screens/MessageDetailScreen";
const Stack = createStackNavigator();

const MessageNavigator = ({ navigaion }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message Details"
        component={MessageDetalScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
