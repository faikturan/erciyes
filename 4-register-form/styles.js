import React from 'react'
import { Platform, StyleSheet } from 'react-native';
import Constants from "expo-constants";

const HEADER_BACKGROUND = "#3498db";
const CONTENT_BACKGROUND = "#f9f9f9"


export const styles = StyleSheet.create({
topSafeArea :{
    backgroundColor: HEADER_BACKGROUND,
},
container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:
    Platform.OS == "ios" ? CONTENT_BACKGROUND : HEADER_BACKGROUND,
},
errorContainer:{
    marginVertical: 5,
},
errorText: {
    color:"#ff7675"
},
header:{
    height: 60,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: HEADER_BACKGROUND,
},
headerText:{
    color:"#fff",
    fontSize:18,
}




})
