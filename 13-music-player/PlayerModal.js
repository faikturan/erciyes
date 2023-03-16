import React from 'react';
import sliderThumbImageAndroid from "../assets/music-player/slider-thumb-android.png";
import sliderThumbImageIOS from "../assets/music-player/slider-thumb-ios.png";
import { displayTime } from './util';
import { styles } from './PlayerModal.style';
import { PRIMARY_COLOR } from './style';
import { Modal, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";



export default function PlayerModal({ 
    isModalVisible,
    closeModal,
    playingSong,
    isPlaying,
    isBuffering,
    currentSongIndex,
    currentPosition,
    setCurrentPosition,
    setRewinding,
    updatePosition,
    pauseOrResumeSong,
    changeSong,
}) {

    const opacity = isBuffering ? 0.5 : 1;

  return (
   <Modal
   isVisible={isModalVisible}
   hasBackdrop={false}
   onBackButtonPress={closeModal}
   style={{ margin: 0 }}>

    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <FontAwesome5 name="times" size={20} color="#757575" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>

   </Modal>
  )
}
