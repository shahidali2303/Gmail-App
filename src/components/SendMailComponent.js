import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";

const SendMailComponent = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} activeOpacity={0.9} style={styles.conatiner}>
      <View>
        <Image
          source={require("../../assets/images/add-new.png")}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    width: 60,
    height: 60,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 999,
  },
  image: {
    width: 35,
    height: 35,
    // backgroundColor: "pink",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default SendMailComponent;
