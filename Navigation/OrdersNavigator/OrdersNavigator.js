import { COLORS } from '../../Constants/Colors';
import OrderItemScreen from '../../Screens/OrderItemScreen/OrderItemScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
                name="Orders"
                component={OrderItemScreen}
                options={{ title: 'Orders' }}
            />
        </Stack.Navigator>
    )   
}

export default OrdersNavigator;