import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, SafeAreaView, Text, Platform} from "react-native";
import Control from './Control';
import Result from './Result';
import { displayTime } from './util';
import Constants from "expo-constants";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [timer, setTimer] = useState(null);
    const [results, setResults] = useState([]);

    const handleRightButtonPress = () => {
        if(isRunning){
            clearInterval(timer);
        }else {
            const interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            },10);
            setTimer(interval);
        }

        setRunning((previousState) => !previousState);
    };

    const handleLeftButtonPress = () => {
        if(isRunning) {
            setResults((previousResults) => {
                previousResults.unshift(time);
                return previousResults;
            });
        } else {
            setResults([]);
            setTime(0);
        }
    };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.display}>
            <Text style={styles.displayText}>{displayTime(time)}</Text>
        </View>

        <View style={styles.control}>
            <Control
            isRunning={isRunning} 
            handleLeftButtonPress={handleLeftButtonPress}
            handleRightButtonPress={handleRightButtonPress}
            />
        </View>

        <View style={styles.result}>
            <Result results={results} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
},
display:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
},
displayText:{
    color:"#fff", 
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetice Neue": null
},
control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
},
result: {
    flex: 2
},
});
