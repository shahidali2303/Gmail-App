import React from "react";
import { Text, View, StyleSheet, TextInput, Touchable } from "react-native";
import NewMailTopToolbar from "../components/NewMailTopToolbar";
import SenderReceiver from "../components/SenderReciever";

const SendMail = ({ navigation }) => {
  return (
    <>
      <View style={styles.page}>
        <NewMailTopToolbar
          handleBack={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
      <SenderReceiver
        title={"From"}
        placeholder="sender email address..."
        iconName={"chevron-down"}
      />
      <SenderReceiver
        title={"To    "}
        placeholder="receiver email address..."
        iconName={"chevron-down"}
      />
      <SenderReceiver title={"Subject"} multiline={true} />

      <View style={{ margin: 10, flex: 1 }}>
        <TextInput placeholder="type your message..." multiline={true} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
    // backgroundColor: "pink",
  },
});
export default SendMail;
