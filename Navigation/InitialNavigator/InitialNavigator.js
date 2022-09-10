import AuthScreen from '../../Screens/AuthScreen/AuthScreen';
import InitialScreen from '../../Screens/InitialScreen/InitialScreen';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const InitialNavigator = () => (
    <Stack.Navigator
        initialRouteNam='Initial'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen 
            name="Initial" 
            component={InitialScreen} 
            options={({ navigation }) => ({
                title: 'Initial',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Auth')}></TouchableOpacity>
                )
            })} 
        />
        <Stack.Screen
            name="Auth"
            component={AuthScreen} 
        />
    </Stack.Navigator>
)

export default InitialNavigator;