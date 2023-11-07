import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../containers/home';
import Account from '../containers/account';
import { Provider } from 'react-redux';
import { store } from '../store/configure_store';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './navigation';

function App() {
  return (
    <View style={{ flex: 1 }}>
   
        <AppNavigation />
      {/* </GestureHandlerRootView> */}
    </View>
  );
}

export default App;