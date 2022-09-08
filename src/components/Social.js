import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Feather from "react-native-vector-icons/Feather";

const Social = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      {/* 1 */}
      <View style={styles.iconContainer}>
        <Feather name="users" style={styles.socialIcon} size={25} />
      </View>
      {/* 2 */}
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          //   backgroundColor: "pink",
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Social</Text>
          <Text style={{ fontWeight: "400", color: "gray" }}>
            Facebook,Twitter,Linkedin
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.newMessageContainer}>
            <Text style={{ color: "white", fontSize: 13 }}>48 new</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  iconContainer: {
    width: 60,
    height: 60,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    borderRadius: 50,
    color: "#4287f5",
  },
  icon: {
    paddingTop: 10,
    color: "#f5c169",
  },
  newMessageContainer: {
    backgroundColor: "#2a8aeb",
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
export default Social;
