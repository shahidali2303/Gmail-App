import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Feather from "react-native-vector-icons/Feather";
import { auth } from "../../firebase";

const CustomDrawer = (props) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      props.navigation.replace("Login");
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <View>
          <Text
            style={{
              fontSize: 24,
              padding: 10,
              borderBottomColor: "#f0f2f1",
              borderBottomWidth: 1,
              color: "#f53d3d",
            }}
          >
            Gmail
          </Text>
        </View>
        <View style={{ flex: 1, paddingTop: 20, backgroundColor: "white" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,

          marginVertical: 20,
          borderTopWidth: 1,
          borderTopColor: "#f0f2f1",
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ marginBototm: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Feather name="share-2" size={20} color="gray" />
            <Text
              style={{
                fontSize: 16,
                color: "gray",
                fontWeight: "600",
                marginLeft: 35,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Feather name="log-out" size={20} color="gray" />
            <Text
              style={{
                fontSize: 16,
                color: "gray",
                fontWeight: "600",
                marginLeft: 35,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
