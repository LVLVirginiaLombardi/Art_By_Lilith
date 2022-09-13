import { COLORS } from '../../Constants/Colors';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    
    return(
        <Stack.Navigator
            initialRouteNam="Home"
            screenOptions={{ 
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? '#462749' : '',
                headerTitleStyle: {
                    fontFamily: 'RobotoLight',
                    fontSize: 20
                },
            }}
        >
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home -> Categories Drawings' }}
            />
        </Stack.Navigator>
    )
};

export default HomeNavigator;