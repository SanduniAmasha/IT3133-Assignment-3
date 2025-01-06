import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View, } from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";
import { students } from "../assets/StudentsDb";

export default function Login(){
    return(
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.view}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.body}>
             <Image source={require("../assets/logo.png")} style={styles.image} />
             <View style={styles.container}>
            <Text style={styles.h1}>Student Login</Text>

            <View style={styles.form}>
              <TextInput
                mode="outlined"
                label="Username"
                placeholder="Enter your username"
                style={styles.form.input}
                value={data.username}
                onChangeText={(text) => setData({ ...data, username: text })}
              />
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Enter your password"
                style={styles.form.input}
                value={data.password}
                onChangeText={(text) => setData({ ...data, password: text })}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => setIsSecure(!isSecure)}
                  />
                }
                secureTextEntry={isSecure}
              />
                </View>
              </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
    },
    body: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
    },
   
    image: {
      marginTop: 20,
      width: "100%",
      height: 100,
      resizeMode: "contain",
    },
  });
  