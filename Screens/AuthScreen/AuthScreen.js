import { Alert, Button, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login, signup } from '../../store/Actions/AuthAction/auth.action';
import { useCallback, useReducer, useState } from 'react';

import { COLORS } from '../../Constants/Colors';
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const backgroundImage = require('../../assets/Drawings/BlackForest.jpeg');
 
export const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true;

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }

        return {
            formIsValid,
            inputValues,
            inputValidities
        }
    }
    return state
}

const AuthScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    const title = 'CREATE ACCOUNT',
        message = 'Have an Account?',
        messageAction = 'Sign In',
        messageTarget = 'Login';

    const handleSignUp = () => {
        dispatch(signup(email, password));
        if(email === '' || password === '') {
            Alert.alert(
                'Invalid Form',
                'Entry a valid email or password',
                [{ text: 'OK' }]
            )
        }
    }
    const handleLogIn = () => {
        dispatch(login(email, password));
        if(email !== '' && password !== '') {
            Alert.alert(
                'LogIn Successfully',
                'Now enjoy the APP',
                [{ text: 'OK' }]
            )
        }
    }
    /*const handleSignUp = () => {
        if(formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert(
                'Invalid Form',
                'Entry a valid email or password',
                [{ text: 'OK' }]
            )
        }
    }*/
    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [formDispatch])

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.screen}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.email}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize='none'
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Text style={styles.password}>Password</Text>
                        <TextInput 
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={(text) => setPassword(text)}
                        />
                        <View style={styles.buttonRegister}>
                            <OutlinedButton icon={"arrow-forward-circle"} onPress={handleSignUp}>Create Account</OutlinedButton>
                        </View>
                    </View>
                    <View style={styles.prompt}>
                        <Text style={styles.promptMessage}>{message}</Text> 
                        <OutlinedButton icon={"person"} onPress={handleLogIn}>
                            {messageAction}
                        </OutlinedButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontFamily: 'RobotoMedium',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 20,
        color: COLORS.gold
    },
    email: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        marginLeft: 10,
        color: COLORS.gold
    },
    password: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        marginLeft: 10,
        color: COLORS.gold
    },
    container: {
        width: '90%',
        height: '60%',
        padding: 12,
        borderColor: COLORS.coolgray,
        borderWidth: 1.5,
        borderRadius: 15,
        backgroundColor: COLORS.ashgray,
        opacity: 0.9
    },
    prompt: {
        flex: 1,
        alingItems: 'center',
        justifyContent: 'center'
    },
    promptMessage: {
        fontSize: 18,
        fontFamily: 'RobotoMedium',
        color: COLORS.coolgray,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 100
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#511548',
        marginLeft: '40%',
    },
    buttonRegister: {
        marginTop: 50,
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#511548'
    },
    inputContainer: {
        justifyContent: 'space-around',
        height: '50%',
        marginTop: 20,
        marginBottom: 20
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: COLORS.coolgray,
        marginBottom: 30,
        marginLeft: 17,
        fontFamily: 'RobotoLight',
        fontSize: 18
    }
});

export default AuthScreen;