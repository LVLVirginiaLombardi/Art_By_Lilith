import AuthScreen from '../../Screens/AuthScreen/AuthScreen';
import { COLORS } from '../../Constants/Colors';
import { DetailScreen } from '../../Screens/DetailScreen/DetailScreen';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';
import InitialScreen from '../../Screens/InitialScreen/InitialScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import ShopNavigator from '../ShopNavigator/ShopNavigator';
import { ShopScreen } from '../../Screens/ShopScreen/ShopScreen';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FirstNavigator = () => {

    return (

        <Stack.Navigator 
            initialRouteName="Initial" 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="Initial" 
                component={InitialScreen} 
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Auth" 
                component={AuthScreen}
                options={() => ({
                    title: 'Log In / New Account',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.violet : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? COLORS.gold : '',
                    headerTitleStyle: {
                        fontFamily: 'RobotoLight',
                        fontSize: 20
                    }
                })} 
            />
        </Stack.Navigator>
    );
};

export default FirstNavigator;