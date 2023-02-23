import React from 'react'
import { FlatList, 
    SafeAreaView, 
    StatusBar, 
    TouchableOpacity, 
    View, 
    ViewStyle,
    Image,
StyleSheet } from 'react-native';
import Article from './Article';
import Stories from './Stories';
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

import data from "./data";


const INSTAGRAM_LOGO = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/345px-Instagram_logo_2022.svg.png";

export default function Instagram() {
    function renderItem({item, index}){
        if(index == 0){
            return(
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} />
                    </View>

                    <Article item={item} />
                </>
            );
        }else{
            return <Article item={item} />
        }
    }
  return (
    <>
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

        <View style={styles.header}>
            <TouchableOpacity>
                <Feather name="camera" size={24} />
            </TouchableOpacity>

            <Image source={{uri: INSTAGRAM_LOGO}} style={styles.logo} />

            <TouchableOpacity>
                <Feather name="send" size={24} />
            </TouchableOpacity>

        </View>

        <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    </>
  )
}

const BORDER_BOTTOM: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor:"#dbdbdb"
}

const styles = StyleSheet.create({
    stories:{
        ...BORDER_BOTTOM,
        height: 104,
        padding:10,
        backgroundColor:"#fafafa"
    },
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        ...BORDER_BOTTOM,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:16,
        height:44,
    },
    logo:{
        flex:1,
        height:30,
        resizeMode:"contain",
    }
})
