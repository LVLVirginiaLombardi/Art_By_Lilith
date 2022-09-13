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
                    backgroundColor: Platform.OS === 'android' ? COLORS.violet : '',
                },
                headerTintColor: Platform.OS === 'android' ? COLORS.gold : '',
                headerTitleStyle: {
                    fontFamily: 'RobotoLight',
                    fontSize: 22
                },
            }}
        >
            <Stack.Screen 
                name="Cart"
                component={CartScreen}
                options={{ title: 'Your Shop Cart' }}
            />
        </Stack.Navigator>
    )   
}

export default CartNavigator;