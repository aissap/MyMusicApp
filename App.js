import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';
import LibraryScreen from './screens/LibraryScreen'; // Import the LibraryScreen component
import { LikedSongsProvider } from './context/LikedSongsContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LikedSongsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Player"
            component={PlayerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Library"
            component={LibraryScreen} // Add LibraryScreen component to the navigation stack
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LikedSongsProvider>
  );
}

