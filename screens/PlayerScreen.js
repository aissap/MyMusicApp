import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Audio } from 'expo-av';

const PlayerScreen = ({ route }) => {
  // Check if route.params exists and has a song property
  const song = route.params?.song;

  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  const playSound = async () => {
    if (song) { // Check if song is defined
      const { sound } = await Audio.Sound.createAsync({ uri: song.preview });
      setSound(sound);
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      {song && ( // Check if song is defined before rendering its details
        <>
          <Image source={{ uri: song.album.cover }} style={styles.cover} />
          <Text style={styles.songTitle}>Playing: {song.title}</Text>
          <Text style={styles.songArtist}>Artist: {song.artist.name}</Text>
          <Button title="Play" onPress={playSound} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 18,
    color: '#888',
  },
});

export default PlayerScreen;
