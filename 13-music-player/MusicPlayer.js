import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import Constants from "expo-constants";
import PlayerModal from './PlayerModal';
import { displayTime } from './util';
import { styles } from './MusicPlayer.style';
import { PLAY_LIST } from './listSong';
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MusicPlayer() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [playingSong, setPlayingSong] = useState({});
    const [isBuffering, setBuffering] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [isRewinding, setRewinding] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [playbackObject, setPlaybackObject] = useState(null);

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>List Song</Text>
        </View>
    );

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
        style={styles.listItem}
        onPress={() => playingSong(item, index)}>

        <Image source={{ uri: item.coverImage }} style={styles.coverImage}/>

        <View style={{ flex: 1 }}>
            <Text style={styles.songName}>{item.name}</Text>

            <View style={styles.songInfo}>
                <Text style={styles.singerName}>{item.singer}</Text>
                <Text style={styles.songDuration}>{displayTime(item.duration)}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );

    const keyExtractor = (item) => item.sourceUri;


  return (
    <div>MusicPlayer</div>
  )
}
