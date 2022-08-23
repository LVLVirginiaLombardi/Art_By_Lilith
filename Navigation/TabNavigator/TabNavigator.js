import { StyleSheet, Text, View } from 'react-native';

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
                        <Ionicons name='md-home' size={20} color={focused ? '#462749' : '#F2D1C9'} />
                        <Text style={{ color: focused ? '#462749' : '#F2D1C9' }}>Shop</Text>
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
                        <Ionicons name='md-cart' size={20} color={focused ? '#462749' : '#F2D1C9'} />
                        <Text style={{ color: focused ? '#462749' : '#F2D1C9'}}>Cart</Text>
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
                        <Ionicons name='cash-outline' size={20} color={focused ? '#462749' : '#F2D1C9'} />
                        <Text style={{ color: focused ? '#462749' : '#F2D1C9'}}>Orders</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name="Location"
            component={PlaceNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='location-outline' size={24} color={focused ? '#462749' : '#F2D1C9'} />
                        <Text style={{ color: focused ? '#462749' : '#F2D1C9'}}>Location</Text>
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