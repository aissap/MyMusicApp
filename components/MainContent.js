// MainContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to MyMusicApp</Text>
      <Text style={styles.text}>Start exploring and discovering new music!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MainContent;
