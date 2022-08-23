import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login, signup } from '../../store/Actions/AuthAction/auth.action';
import { useCallback, useReducer, useState } from 'react';

import { COLORS } from '../../Constants/Colors';
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

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
    })

    const title = 'REGISTER',
        message = 'Do you have already an account?',
        messageAction = 'Access',
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
                'SignIn Successfully',
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
                        <Button title='Register' onPress={handleSignUp} />
                    </View>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text> 
                    <TouchableOpacity onPress={handleLogIn}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'RobotoMedium',
        marginBottom: 18,
        textAlign: 'center'
    },
    email: {
        marginBottom: 15,
        marginTop: 5,
    },
    password: {
        marginBottom: 20,
        marginTop: 5,
    },
    container: {
        width: '90%',
        height: '60%',
        maxWidth: 400,
        padding: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        backgrounColor: 'white',
    },
    prompt: {
        alingItems: 'center',
    },
    promptMessage: {
        fontSize: 13,
        fontFamily: 'RobotoLight',
        color: '#333',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 30,

    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#511548',
        marginLeft: '40%',
    },
    button: {
        backgrounColor: COLORS.primary,
    },
    buttonRegister: {
        marginTop: 30,
    },
    inputContainer: {
        justifyContent: 'space-around',
        height: '50%',
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        marginBottom: 30,
    }
})

export default AuthScreen;