import { Platform, TouchableOpacity } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../../Screens/MapScreen/MapScreen';
import NewPlaceScreen from '../../Screens/NewPlaceScreen/NewPlaceScreen';
import PlaceDetailScreen from '../../Screens/PlaceDetailScreen/PlaceDetailScreen';
import PlaceListScreen from '../../Screens/PlaceListScreen/PlaceListScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.DARK_SIENNA : '',
            },
            headerTintColor: Platform.OS === 'android' ? COLORS.primary : COLORS.DARK_SIENNA,
            headerTitleStyle: {
                fontWeight: 'normal',
            }
        }}
    >
        <PlaceStack.Screen
            name="Address"
            component={PlaceListScreen}
            options={({ navigation }) => ({
                title: 'Address',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('New')}>
                        <Ionicons
                            name='md-add'
                            color={Platform.OS === 'android' ? COLORS.primary : COLORS.DARK_SIENNA}
                            size={24}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
       <PlaceStack.Screen
            name="Detail"
            component={PlaceDetailScreen}
            options={{title: 'Address Detail'}} 
        />
        <PlaceStack.Screen
            name="New"
            component={NewPlaceScreen}
            options={{title: 'New Address'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Map'}} 
        />
    </PlaceStack.Navigator>
)

export default PlaceNavigator;