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
                backgroundColor: Platform.OS === 'android' ? COLORS.violet : '',
            },
            headerTintColor: Platform.OS === 'android' ? COLORS.gold : '',
            headerTitleStyle: {
                fontSize: 24,
                fontFamily: 'RobotoLight'
            }
        }}
    >
        <PlaceStack.Screen
            name="Place"
            component={PlaceListScreen}
            options={({ navigation }) => ({
                title: 'Your Drawing´s Pics',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('New Pic')}>
                        <Ionicons
                            name='md-add'
                            color={Platform.OS === 'android' ? COLORS.gold : COLORS.DARK_SIENNA}
                            size={30}
                        />
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity disabled={true}>
                        <Ionicons
                            name='color-palette'
                            color={Platform.OS === 'android' ? COLORS.gold : COLORS.DARK_SIENNA}
                            size={28}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
       <PlaceStack.Screen
            name="Place Detail"
            component={PlaceDetailScreen}
            options={{title: 'Place Detail'}} 
        />
        <PlaceStack.Screen
            name="New Pic"
            component={NewPlaceScreen}
            options={{title: 'New Pic'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Map'}} 
        />
    </PlaceStack.Navigator>
);

export default PlaceNavigator;