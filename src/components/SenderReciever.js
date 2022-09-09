import React from "react";
import { View, StyleSheet, TextInput, Image, Text } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Screen from "./Screen";

const SenderReceiver = ({
  onPress,
  title,
  placeholder,
  iconName,
  multiline,
}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={{ paddingTop: 2 }}>
          <Text style={{ fontSize: 18, color: "gray" }}>{title}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <TextInput
              placeholder={placeholder}
              keyboardType="email-address"
              multiline={multiline}
            />
          </View>
          <View>
            <Octicons name={iconName} size={25} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    borderBottomColor: "#f0f2f1",
    borderBottomWidth: 1,

    padding: 18,
    // backgroundColor: "pink",
  },
  container: {
    flexDirection: "row",
    // backgroundColor: "pink",
  },
});

export default SenderReceiver;
