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
  