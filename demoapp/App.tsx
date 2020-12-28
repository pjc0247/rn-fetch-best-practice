import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainPage } from './src/page/Main';
import { PostsPage } from './src/page/Posts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens
      >
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Posts" component={PostsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
