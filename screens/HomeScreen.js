import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import NavigationBar from '../components/NavigationBar';

const HomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const containerStyle = isDarkMode ? [styles.container, styles.darkMode] : styles.container;
  const welcomeTextStyle = isDarkMode ? [styles.welcomeText, styles.darkText] : styles.welcomeText;
  const navigationButtonStyle = isDarkMode ? [styles.navigationButton, styles.darkButton] : styles.navigationButton;
  const navigationButtonTextStyle = isDarkMode ? [styles.navigationButtonText, styles.darkButtonText] : styles.navigationButtonText;

  return (
    <View style={containerStyle}>
      {/* NavigationBar */}
      <NavigationBar />

      {/* Theme Switch */}
      <View style={styles.themeSwitchContainer}>
        <Text style={styles.themeSwitchText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Welcome Message */}
      <Text style={welcomeTextStyle}>Welcome to MyMusicApp!</Text>

      {/* Navigation Options */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={navigationButtonStyle}
          onPress={() => navigation.navigate('Library')}
        >
          <Text style={navigationButtonTextStyle}>Go to Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={navigationButtonStyle}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={navigationButtonTextStyle}>Go to Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={navigationButtonStyle}
          onPress={() => navigation.navigate('Player')}
        >
          <Text style={navigationButtonTextStyle}>Go to Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Default background color for light theme
  },
  darkMode: {
    backgroundColor: '#212121', // Default background color for dark theme
  },
  darkText: {
    color: '#FFFFFF', // Text color for dark theme
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000', // Default text color for light theme
  },
  navigationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  navigationButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1DB954',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  darkButton: {
    backgroundColor: '#4CAF50', // Button color for dark theme
  },
  darkButtonText: {
    color: '#FFFFFF', // Button text color for dark theme
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  themeSwitchText: {
    marginRight: 10,
  },
});

export default HomeScreen;
