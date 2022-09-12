import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Screen from "./Screen";

const Header = ({ onPress }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Octicons
            name="three-bars"
            size={20}
            style={styles.icon}
            onPress={onPress}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View style={{ marginLeft: 10, paddingTop: 6 }}>
            <TextInput
              value={searchTerm}
              onChangeText={setSearchTerm}
              placeholder="Search mail"
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/w6.jpg")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  icon: {
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;
