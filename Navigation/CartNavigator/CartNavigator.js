import { COLORS } from '../../Constants/Colors';
import CartScreen from '../../Screens/CartScreen/CartScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? '#462749' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Cart"
                component={CartScreen}
                options={{ title: 'Shop Cart' }}
            />
        </Stack.Navigator>
    )   
}

export default CartNavigator;