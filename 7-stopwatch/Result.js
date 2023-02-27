import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { displayTime } from './util'

export default function Result({ results }) {
  return (
    <ScrollView>
        <View style={styles.resultItem} />
        {results.map((item, index) =>{
            <View key={index} style={styles.resultItem}>
            <Text style={styles.resultItemText}>
                Step {results.length - index}
            </Text>

            <Text style={styles.resultItemText}>{displayTime(item)}</Text>
            </View>
        })}
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    resultItem:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth: 1,
        borderColor: "#313131",
        height: 50,
        paddingHorizontal: 15,
    },
    resultItemText:{
        color:"#fff"
    },
});
