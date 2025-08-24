import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/rootStackParamList.type';
import { HOME_SCREEN } from './screenName.constant';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../ui/screens/home/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: 'Product List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
