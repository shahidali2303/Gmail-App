import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NewMailTopToolbar = ({ handleBack }) => {
  return (
    <Screen>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.2}>
            <Ionicons name="arrow-back" size={25} onPress={handleBack} />
          </TouchableOpacity>
          <Text style={styles.heading}>Compose</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="attachment"
            size={25}
            style={{ marginRight: 15 }}
          />
          <Ionicons
            name="send-sharp"
            size={25}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
          <Entypo
            name="dots-three-vertical"
            size={25}
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    paddingLeft: 20,
    fontWeight: "600",
  },
});
export default NewMailTopToolbar;
