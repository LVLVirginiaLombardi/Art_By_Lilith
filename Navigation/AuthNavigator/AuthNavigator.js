import AuthScreen from '../../Screens/AuthScreen/AuthScreen';
import { COLORS } from '../../Constants/Colors';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    
    return(
        <Stack.Navigator
            initialRouteNam='Auth'
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
                name='Auth' 
                component={AuthNavigator}  
                options={({ navigation }) => ({
                    title: 'Log In / New Account',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Initial')}>
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

export default AuthNavigator;