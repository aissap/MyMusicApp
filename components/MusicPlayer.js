// components/MusicPlayer.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    // Implement skip forward functionality
  };

  const handleSkipBackward = () => {
    // Implement skip backward functionality
  };

  const handleVolumeChange = (volume) => {
    // Implement volume change functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.currentTime}>{currentTime} / 3:45</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleSkipBackward}>
          <Text>◄◄</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause}>
          <Text>{isPlaying ? '❚❚' : '▶'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkipForward}>
          <Text>►►</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.volumeControl}>
        {/* Volume control goes here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  currentTime: {
    fontSize: 16,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeControl: {
    // Styles for volume control
  },
});

export default MusicPlayer;
