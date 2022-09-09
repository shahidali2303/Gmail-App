import React, { useState } from "react";
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
import Header from "../components/Header";
import SendMailComponent from "../components/SendMailComponent";
import ListItemSwipe from "../components/ListItemSwipe";

const HomeScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(DATA);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const getHeader = () => {
    return (
      <>
        <Social />
        <Promotional />
      </>
    );
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Message Details", item);
      }}
    >
      <Message
        image={item.image}
        subject={item.subject}
        subtitle={item.subtitle}
        time={item.time}
        title={item.title}
        renderRightActions={() => (
          <ListItemSwipe onPress={() => handleDelete(item)} />
        )}
      />
    </TouchableOpacity>
  );
  return (
    <>
      <Header onPress={() => navigation.openDrawer()} />
      <SendMailComponent
        onPress={() => {
          navigation.navigate("Send Mail");
        }}
      />
      <View style={styles.page}>
        <Text style={{ color: "gray", letterSpacing: 1 }}>PRIMARY</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={messages}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => {
              return (
                <View>
                  <Text>No Messages yet</Text>
                </View>
              );
            }}
            ListHeaderComponent={getHeader}
          />
        </View>
      </View>
    </>
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
