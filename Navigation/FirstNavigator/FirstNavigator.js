import AuthScreen from '../../Screens/AuthScreen/AuthScreen';
import { COLORS } from '../../Constants/Colors';
import InitialScreen from '../../Screens/InitialScreen/InitialScreen';
import React from 'react';
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
                options={({
                    headerShown: true,
                    title: 'Log In  /  New Account',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.violet : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? COLORS.gold : '',
                    headerTitleStyle: {
                        fontFamily: 'RobotoLight',
                        fontSize: 24
                    }
                })} 
            />
        </Stack.Navigator>
    );
};

export default FirstNavigator;