import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../containers/home';
import Account from '../../containers/account';
import { Provider } from 'react-redux';
import { store } from '../../store/configure_store';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RestoInfo from '../../containers/home/resto_info';

type RootStackParamList = {
  Home: undefined;
  RestoInfo: undefined;
  Account: { userId: string };
};

export type Props = NativeStackScreenProps<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (

    <Provider store={store}>
      {/* <GestureHandlerRootView> */}
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Account" component={Account} />
          <RootStack.Screen name="RestoInfo" component={RestoInfo} />
        </RootStack.Navigator>
      </NavigationContainer>
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
}

export default AppNavigation;