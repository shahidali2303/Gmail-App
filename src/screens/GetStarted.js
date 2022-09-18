import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const GetStarted = ({ navigation }) => {
  return (
    <Screen style={styles.page}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/images/Gmail_icon.png")}
          style={styles.gmailIcon}
          resizeMode="contain"
        />
        <Text
          style={{
            flex: 1,
            // backgroundColor: "pink",
            marginLeft: 10,
            fontSize: 30,
            fontWeight: "700",
            letterSpacing: 2,
            paddingTop: 5,
          }}
        >
          Zmail
        </Text>
      </View>
      <View style={styles.mainHeading}>
        <Text style={{ fontSize: 54, textAlign: "center", fontWeight: "500" }}>
          To simplify the way you work..
        </Text>
        <Image
          source={require("../../assets/images/getStartedImage.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.buttonContainer}
        activeOpacity={0.8}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Get Started
          </Text>
          <FontAwesome5 name="arrow-right" color={"white"} size={20} />
        </View>
      </TouchableOpacity>
    </Screen>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  gmailIcon: {
    width: 50,
    height: 50,
  },
  page: {
    padding: 10,
    flex: 1,
  },
  mainHeading: {
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 320,
    height: 180,
    // backgroundColor: "pink",
    borderRadius: 10,
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 80,
    backgroundColor: "#FF4A4A",
    padding: 20,
    borderRadius: 10,
  },
});
