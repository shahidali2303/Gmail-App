import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Message from "../components/Message";
import Social from "../components/Social";
import Promotional from "../components/Promotional";
import DATA from "../../assets/data/data";

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Message
      image={item.image}
      subject={item.subject}
      subtitle={item.subtitle}
      time={item.time}
      title={item.title}
    />
  );
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={{ color: "gray", letterSpacing: 1 }}>PRIMARY</Text>
        <View style={styles.listContainer}>
          <Social />
          <Promotional />
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => {
              return (
                <View>
                  <Text>No Messages yet</Text>
                </View>
              );
            }}
          />
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
