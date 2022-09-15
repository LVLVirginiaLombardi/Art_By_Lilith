import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import CartNavigator from '../CartNavigator/CartNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from '../OrdersNavigator/OrdersNavigator';
import PlaceNavigator from '../PlaceNavigator/PlaceNavigator';
import React from 'react';
import ShopNavigator from '../ShopNavigator/ShopNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomsTabs.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
    }}>
        <BottomsTabs.Screen 
            name="ShopTab" 
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name='md-home' size={22} color={focused ? COLORS.blue : COLORS.ashgray} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.ashgray }}>Home</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name="CartTab"
            component={CartNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-cart' size={22} color={focused ? COLORS.blue : COLORS.ashgray} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.ashgray}}>Cart</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name="OrderTab"
            component={OrdersNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='basket' size={22} color={focused ? COLORS.blue : COLORS.ashgray} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.ashgray}}>Orders</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name="PlaceTab"
            component={PlaceNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='camera' size={22} color={focused ? COLORS.blue : COLORS.ashgray} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.ashgray}}>Pic</Text>
                    </View>
                )
            }}
        />
    </BottomsTabs.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 50,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabNavigator;