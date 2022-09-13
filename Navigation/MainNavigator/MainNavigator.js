import FirstNavigator from '../FirstNavigator/FirstNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopNavigator from '../ShopNavigator/ShopNavigator';
import TabNavigator from '../TabNavigator/TabNavigator';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  
  const userId = useSelector(state => state.auth.userId);
  
  return (
      <NavigationContainer>
        { userId ? 
          <TabNavigator/>
          : 
          <FirstNavigator/> 
        }
      </NavigationContainer>
  );
}

export default MainNavigation;