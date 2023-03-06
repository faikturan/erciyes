import React from 'react'
import { Alert, Linking, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import moment from "moment";

export default function Article({ item }) {
    const openLink = (url) => {
        Linking.canOpenURL(url).then((supported) => {
            if(supported){
                Linking.openURL(url);
            }else{
                Alert.alert("Broken Link!");
            }
        });
    };
  return (
    <View style={styles.article}>

        <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />

        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => openLink(item.url)}>
                <Text style={styles.articleTitle} numberOfLines={3}>
                    {item.title}
                </Text>
            </TouchableOpacity>

            <Text style={styles.articlePublishedAt}>
                {moment(item.publishedAt).fromNow()}
            </Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    article:{
        flexDirection: "row",
        paddingVertical: 15,
    },
    articleImage:{
        width: 150,
        height: 80,
        resizeMode: "contain",
        marginRight: 15,
    },
    articleTitle:{
        fontSize: 16,
        marginBottom: 10,
    },
    articlePublishedAt:{
        fontSize: 14,
    },
});