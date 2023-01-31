import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Constants from "expo-constants";

export default function HelloWorld2() {
  return (
    <SafeAreaView>
    <Text style={styles.container}>
        Hello <Text style={styles.highlightText1}>World</Text>
    </Text>

    <Text style={styles.heading}>
        Hello <Text style={styles.highlightText2}>World</Text>
    </Text>

    <Text style={[styles.heading, {color:"#5959d"}]}>
        Hello <Text style={styles.highlightText2}>World</Text>
    </Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
    //SafeAreView on Android devices
    paddingTop: Constants.statusBarHeight,
    },
    heading:{
        marginTop: 50,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    highlightText1: {
        color:"#e74c3c",
    },
    highlightText2: {
        fontStyle: "italic",
        TextDecorationLine: "underline",
        color:"#2980b9",
    },
    highlightText3: {
        color:"#fff",
        backgroundColor: "#59595d"
    }
})
