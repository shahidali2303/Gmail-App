import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
const ListItemSwipe = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 70,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EvilIcons
          name="trash"
          style={{
            color: "white",
          }}
          size={40}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemSwipe;
