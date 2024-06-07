// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for songs"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchSongs} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => navigation.navigate('Player', { song: item })}
          >
            <Image source={{ uri: item.album.cover }} style={styles.cover} />
            <View style={styles.info}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  songItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  cover: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
  },
  songArtist: {
    color: 'gray',
  },
});

export default SearchScreen;
