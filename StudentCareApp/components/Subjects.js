import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, DataTable } from "react-native-paper";
import { courses, marks as marksData, subjects as subjectsData } from "../assets/StudentsDb";

const Subjects = ({ student }) => {
  
  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.h1}>{course.name}</Text>
          <Text style={{ textAlign: "center" }}>
            {marks.length} Subjects | average Marks: {averageMarks.toFixed()}
          </Text>

          <View
            style={{
              marginBlock: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            Marks Information
          </Text>
          
        </Card.Content>
      </Card>
    </View>
  );
};

export default Subjects;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
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
