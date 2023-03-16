import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import Constants from "expo-constants";
import PlayerModal from './PlayerModal';
import { displayTime } from './util';
import { styles } from './MusicPlayer.style';
import { PLAY_LIST } from './listSong';
import { View, Text, TouchableOpacity, Image, SafeAreaView, FlatList } from "react-native";

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

    const playSong = async (song, index) => {
        setModalVisible(true);
        setBuffering(true);
        setPlaying(false);
        setCurrentPosition(0);
        setCurrentSongIndex(index);
        setPlayingSong(song);

        try {
            if(playbackObject !== null){
                await playbackObject.unloadAsync();
            }


            const { sound } = await Audio.Sound.createAsync(
                { uri: song.sourceUri },
                { shouldPlay: true }
            );
            sound.setOnPlaybackStatusUpdate(setOnPlaybackStatusUpdate);
            setPlaybackObject(sound);
        } catch (error) {
            alert("Can't play this song!");
        }
    };

   const onPlaybackStatusUpdate = ({
    isLoaded,
    isBuffering,
    isPlaying,
    error,
   }) => {
    if(!isLoaded){
        if(error){
            alert(`Encountered a fatal error during playback: ${error}`);
        }
    }else{
        setBuffering(isBuffering);
        setPlaying(isPlaying);
    }
   };


   const updatePosition = async(position) => {
    try {
        await playbackObject.setPositionAsync(position);
        setCurrentPosition(position);
        setRewinding(false);
    } catch (error) {
        console.log(err);
    }
   };

   const pauseOrResumeSong =  async () => {
    if(isPlaying){
        setPlaying(false);
        playbackObject.pauseAsync();
    }else{
        if(currentPosition === playSong.duration){
            setCurrentPosition(0);
            await playbackObject.replayAsync();
        }else{
            await playbackObject.playAsync();
        }
    }
   };

   const changeSong = (index) => {
    if(index < 0) index = PLAY_LIST.length - 1;
    else if(index === PLAY_LIST.length) index = 0;

    playSong(PLAY_LIST[index], index);
   };

   const stopPlaySong = () =>{
    setModalVisible(false);
    setPlaying(false);
    playbackObject.unloadAsync();
   };

   useEffect(() => {
    if(isPlaying && !isBuffering){
        const interval = setInterval(async () => {
            const {
                positionMills,
                durationMills,
            } = await playbackObject.getStatusAsync();

            if(!isRewinding) setCurrentPosition(positionMills || 0);

            if(positionMills >= durationMills - 900){
                await playbackObject.setPositionAsync(durationMills);
                setCurrentPosition(durationMills);
                setPlaying(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }
   }, [isPlaying, isBuffering, isRewinding])

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={PLAY_LIST}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        />

        <PlayerModal
        isModalVisible={isModalVisible}
        closeModal={stopPlaySong}
        playingSong={playingSong}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentSongIndex={currentSongIndex} 
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        setRewinding={setRewinding}
        updatePosition={updatePosition}
        pauseOrResumeSong={pauseOrResumeSong}
        changeSong={changeSong}
        />

        
    </SafeAreaView>
  );
}

