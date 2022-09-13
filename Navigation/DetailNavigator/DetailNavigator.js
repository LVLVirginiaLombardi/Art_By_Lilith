import { COLORS } from '../../Constants/Colors';
import {DetailScreen} from '../../Screens/DetailScreen/DetailScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DetailNavigator = () => {
    
    return(

        <Stack.Navigator
            initialRouteNam='Detail'
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
                name="Detail"
                component={DetailScreen}
                options={({ navigation }) => ({
                    title: 'Drawings Details',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Ionicons 
                                    icon='arrow-black' 
                                    size={24} 
                                    color={COLORS.gold} 
                                />
                            </TouchableOpacity>
                        )
                })} 
            />
        </Stack.Navigator>
    )
}

export default DetailNavigator;