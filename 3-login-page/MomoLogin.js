import React from 'react'
import Constants from "expo-Constants";
import {FontAwesome5} from "@expo/vector-icons";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MomoLogin() {
  return (
    <SafeAreaView>
        <StatusBar style="light" />

        <View style={styles.container}>
        <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Merhaba!</Text>
            <Text style={styles.userText}>FAİK TURAN</Text>
            <Text style={styles.userText}>0123456789</Text>
        </View>

        <View style={styles.form}>

            <FontAwesome5 name="lock" styles={styles.iconLock} />

            <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Parolanı Gir"
            placeholderTextColor="#929292" />

            <TouchableOpacity style={styles.buttonLogin}>

            </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  )
}

const TEXT : TextStyle = {
    color:"#fff",
    textAlign: "center",
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#b0006d",
        paddingTop: Constants.statusBarHeight,
    },
    textWrapper:{
        marginTop: 60,
        marginBottom: 30,
    },
    hiText:{
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
    form:{
        marginBottom: 30,
    },
    buttonLogin:{
        height: 50,
        borderRadius: 25,
        backgroundColor:"#8d015a",
        justifyContent: "center",
        marginTop: 15,
    },
    iconLock:{
        
    }
})
