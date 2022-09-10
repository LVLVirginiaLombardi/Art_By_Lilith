import AuthNavigator from '../AuthNavigator/AuthNavigator';
import InitialNavigator from '../InitialNavigator/InitialNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from '../TabNavigator/TabNavigator';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  
  const userId = useSelector(state => state.auth.userId);
  
  return (
      <NavigationContainer>
        <InitialNavigator>
        { userId ? 
          <TabNavigator />
          : 
          <AuthNavigator />
        }
        </InitialNavigator>
      </NavigationContainer>
  )
}

export default MainNavigation;