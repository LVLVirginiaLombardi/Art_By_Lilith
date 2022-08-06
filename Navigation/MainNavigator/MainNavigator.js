import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from '../TabNavigator/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default MainNavigation;