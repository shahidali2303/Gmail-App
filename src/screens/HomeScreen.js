import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import Message from "../components/Message";
import Social from "../components/Social";
import Promotional from "../components/Promotional";
import dummyData from "../../assets/data/data";
import Header from "../components/Header";
import SendMailComponent from "../components/SendMailComponent";
import ListItemSwipe from "../components/ListItemSwipe";
import Octicons from "react-native-vector-icons/Octicons";
import Screen from "../components/Screen";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState(dummyData);

  useEffect(() => {
    const newContacts = dummyData.filter((contact) =>
      contact.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMessages(newContacts);
  }, [searchTerm]);

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
      {/* <Header onPress={() => navigation.openDrawer()} /> */}
      <Screen>
        <View style={styles.container}>
          <View>
            <Octicons
              name="three-bars"
              size={20}
              style={styles.icon}
              onPress={() => navigation.openDrawer()}
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
export default HomeScreen;
