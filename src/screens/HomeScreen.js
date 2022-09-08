import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Message from "../components/Message";
import Social from "../components/Social";
import Promotional from "../components/Promotional";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={{ color: "gray", letterSpacing: 1 }}>PRIMARY</Text>
        <View style={styles.listContainer}>
          <Message />
          <Message />
          <Social />
          <Message />
          <Message />
          <Message />
          <Promotional />
          <Message />
          <Message />
          <Message />
          <Message />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    margin: 10,
    // backgroundColor: "pink",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
export default HomeScreen;
