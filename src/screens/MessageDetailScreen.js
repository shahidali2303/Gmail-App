import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MssgDetailTopToolbar from "../components/MssgDetailTopToolbar";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";

const MessageDetalScreen = ({ route, navigation }) => {
  const messages = route.params;
  return (
    <View style={styles.page}>
      <MssgDetailTopToolbar
        handleBack={() => {
          navigation.navigate("Home");
        }}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 22 }}>{messages.subject}</Text>
      </View>

      <View style={styles.container}>
        <Image
          source={messages.image}
          style={styles.image}
          resizeMode="cover"
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            // backgroundColor: "pink",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                {messages.title}
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 12, paddingTop: 4 }}>
                {messages.time}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>to me</Text>
              <Entypo name="chevron-down" size={15} />
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <Octicons name="reply" size={20} style={{ marginRight: 10 }} />
              <Entypo name="dots-three-vertical" size={20} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,

            letterSpacing: 1,
            marginVertical: 10,
            lineHeight: 28,
          }}
        >
          {messages.subtitle} Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    margin: 10,
    // backgroundColor: "pink",
  },
  container: {
    // backgroundColor: "pink",
    marginTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: {
    paddingTop: 10,
    color: "#f5c169",
  },
});
export default MessageDetalScreen;
