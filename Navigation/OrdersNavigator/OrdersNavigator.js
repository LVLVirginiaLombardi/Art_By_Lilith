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
                name="Orders"
                component={OrderItemScreen}
                options={{ title: 'Your Orders' }}
            />
        </Stack.Navigator>
    )   
}

export default OrdersNavigator;