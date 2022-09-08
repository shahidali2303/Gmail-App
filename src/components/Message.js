import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Message = ({ image, title, time, subject, subtitle }) => {
  const [star, setStar] = useState("staro");
  function handleStar() {
    return setStar("star");
  }
  return (
    // <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <Image
        // source={require("../../assets/images/m1.jpg")}
        source={image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
          <Text style={{ fontWeight: "600" }}>{time}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{}}>
            <Text style={{ fontWeight: "500" }}>
              {/* Tug of War | Market close flat. CVs Sales... */}
              {subject}
            </Text>
            <Text style={{ color: "gray" }}>
              {/* Despite a gap-up opening, market move... */}
              {subtitle}
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={handleStar}>
            <AntDesign name={star} size={25} style={styles.icon} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  icon: {
    paddingTop: 10,
    color: "#f5c169",
  },
});
export default Message;
