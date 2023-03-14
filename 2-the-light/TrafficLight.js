import React, { useState } from 'react';
import Constants from "expo-constants";
import trafficLight from "../assets/the-light-images/traffic-light.png";
import trafficLightGreen from "../assets/the-light-images/traffic-light-green.png";
import trafficLightYellow from "../assets/the-light-images/traffic-light-yellow.png";
import trafficLightRed from "../assets/the-light-images/traffic-light-red.png";
import { SafeAreaView, StyleSheet, Image, TouchableHighlight, View, Text, Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function TrafficLight() {
  const [color, setColor] = useState("");

  let imageSource = trafficLight;
  if(color === "red"){
    imageSource = trafficLightRed;
  }else if(color === "yellow"){
    imageSource = trafficLightYellow;
  }else if(color === "green"){
    imageSource = trafficLightGreen;
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />


        <Image fadeDuration={0} source={imageSource} style={styles.image} />

        <View style={styles.buttonGroup}>
        <TouchableHighlight
        style={[styles.C, { backgroundColor:"#ce0100"}]}
        underlayColor="#9b0100"
        onPress={() => setColor("red")}>
        <Text style={styles.buttonText}>Red</Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={[styles.C, { backgroundColor:"#ff8300"}]}
        underlayColor="#cc6900"
        onPress={() => setColor("yellow")}>
        <Text style={styles.buttonText}>Yellow</Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={[styles.C, { backgroundColor:"#54a111"}]}
        underlayColor="#3c730c"
        onPress={() => setColor("green")}>
        <Text style={styles.buttonText}>Green</Text>
        </TouchableHighlight>

        </View>

    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight,
    },
    image:{
        maxWidth: "100%",
        maxHeight: screenHeight - Constants.statusBarHeight - 150,
        resizeMode: "contain",
        marginBottom: 20,
    },
    buttonGroup:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button:{
        width: 80,
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: "#fff",
    },
});
