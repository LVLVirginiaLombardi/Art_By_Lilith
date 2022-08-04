import { COLORS } from '../../Constants/Colors';
import { DetailScreen } from '../../Screens/DetailScreen/DetailScreen';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ShopScreen } from '../../Screens/ShopScreen/ShopScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
                },
                headerTintColor: Platform.OS === 'android' ? '#462749' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'DRAWINGS CATEGORIES' }}/>
                <Stack.Screen name='Detail' component={DetailScreen} options={({route}) => ({ title: route.params.name})}/>
                <Stack.Screen name='Shop' component={ShopScreen} options={({route}) => ({title: route.params.drawing.name})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;