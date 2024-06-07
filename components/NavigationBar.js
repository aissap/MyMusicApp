// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.link}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Text style={styles.link}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    padding: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  links: {
    flexDirection: 'row',
  },
  link: {
    marginLeft: 16,
    fontSize: 18,
    color: 'white',
  },
});

export default NavigationBar;
