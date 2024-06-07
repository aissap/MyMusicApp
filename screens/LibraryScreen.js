// screens/LibraryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { fetchPlaylists } from '../services/deezerService'; // Import the fetchPlaylists function

const LibraryScreen = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadPlaylists = async () => {
      try {
        const data = await fetchPlaylists(); // Use fetchPlaylists function from deezerService.js
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    loadPlaylists();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      onPress={() => navigation.navigate('PlaylistDetail', { playlist: item })}
    >
      <Text style={styles.playlistName}>{item.title}</Text>
      <Image source={{ uri: item.picture_medium }} style={styles.coverArt} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  playlistName: {
    fontSize: 18,
    marginRight: 16,
  },
  coverArt: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default LibraryScreen;
