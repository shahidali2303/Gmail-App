import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { auth } from "../../firebase";
import Screen from "../components/Screen";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState("true");

  if (!loading)
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      </>
    );

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
      });
  };

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={{ paddingLeft: 10 }}>
              Sign up with one of the following options.
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              {/* 1 */}
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "49%",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/images/google-icon.png")}
                  resizeMode="contain"
                  style={styles.loginIcon}
                />
              </TouchableOpacity>
              {/* 2 */}
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "49%",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/images/apple-icon.png")}
                  resizeMode="contain"
                  style={styles.loginIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ padding: 10 }}>
              <Text>Name</Text>
              <TextInput
                placeholder="your name"
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 10,
                  padding: 15,
                  marginTop: 10,
                }}
              />
            </View>
            <View style={{ padding: 10 }}>
              <Text>Email</Text>
              <TextInput
                placeholder="example@gmail.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 10,
                  padding: 15,
                  marginTop: 10,
                }}
              />
            </View>
            <View style={{ padding: 10, marginTop: 10 }}>
              <Text>Password</Text>
              <TextInput
                placeholder="Enter Your Password"
                value={password}
                onChangeText={(text) => setpassword(text)}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 10,
                  padding: 15,
                  marginTop: 10,
                }}
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttons}
          onPress={handleSignUp}
          activeOpacity={0.7}
        >
          <Text
            style={{
              padding: 15,
              color: "white",
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 2,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "pink",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            activeOpacity={0.6}
          >
            <Text style={{ marginLeft: 10, fontWeight: "700" }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputContainer: {
    padding: 10,
  },
  buttonContainer: {},
  buttons: {
    backgroundColor: "#FF4A4A",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  loginIcon: {
    width: 40,
    height: 40,
  },
});
export default RegisterScreen;
