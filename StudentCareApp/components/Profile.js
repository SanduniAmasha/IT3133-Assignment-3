import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const Profile = ({ student }) => {
  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Image source={student.profile_pic} style={styles.profile_pic} />
          
        </Card.Content>
      </Card>
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
  profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
  },
});
