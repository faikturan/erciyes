import React from 'react'
import { View, Text } from 'react-native'


export default function HelloWorld1() {
  return (
    <View
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3498db"
    }}>
    <Text style={{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        textTransform:"uppercase"
    }}>
        HelloWorld!
    </Text>
    
    </View>
  )
}

