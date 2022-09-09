import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const MssgDetailTopToolbar = ({
  handleBack,
  handleMore,
  handleDelete,
  handleArchive,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.2}>
          <Ionicons name="arrow-back" size={25} onPress={handleBack} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="archive-outline"
          size={25}
          style={{ marginRight: 15 }}
          onPress={handleArchive}
        />
        <AntDesign
          name="delete"
          size={25}
          style={{ marginLeft: 15, marginRight: 15 }}
          onPress={handleDelete}
        />
        <Entypo
          name="dots-three-vertical"
          size={25}
          style={{ marginLeft: 15 }}
          onPress={handleMore}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default MssgDetailTopToolbar;
