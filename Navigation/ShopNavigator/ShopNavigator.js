import { COLORS } from '../../Constants/Colors';
import { DetailScreen } from '../../Screens/DetailScreen/DetailScreen';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';
import React from 'react';
import {ShopScreen} from '../../Screens/ShopScreen/ShopScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    
    return(
        <Stack.Navigator
            initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.violet : '',
                },
                headerTintColor: Platform.OS === 'android' ? COLORS.gold : '',
                headerTitleStyle: {
                    fontFamily: 'RobotoLight',
                    fontSize: 20,
                },  
            }}  
        > 
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ 
                    title: 'Home -> Categories Drawings'
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options=
                {({route}) => ({title: route.params.name})}
            />  
            <Stack.Screen 
                name="Shop"
                component={ShopScreen} 
                options=
                {({route}) => ({ title: route.params.drawing})}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;