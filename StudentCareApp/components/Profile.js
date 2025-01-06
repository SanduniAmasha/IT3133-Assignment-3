import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const Profile = ({ student }) => {
  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});
