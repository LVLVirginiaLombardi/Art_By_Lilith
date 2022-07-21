import { Button, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import { NumberContainer } from '../components/NumberContainer'

const SecondScreen = props => {


    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }

    const handlerResetInput = () => {
        setConfirmed(false);
        setEnteredValue('')
    }

    const handlerConfirmInput = () => {
        let choseNumber = parseInt(enteredValue)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1) return;
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    return (
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start Game</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Choose a number</Text>
                            <Input 
                                style={styles.input}
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='numeric'
                                maxLength={2}
                                value={enteredValue}
                                onChangeText={handlerInputNumber}
                            />
                            <View style={styles.buttonContainer}>
                                {enteredValue.length > 0 && (
                                    <>
                                        <Button title='Clean' onPress={() => handlerResetInput()} color={Colors.accent} />
                                        <Button title='Confirm' onPress={() => handlerConfirmInput()} color={Colors.primary} disabled={enteredValue.length < 2 ? true : false}/>
                                    </>
                                )}
                            </View>
                        </Card>
                        {confirmed && (
                            <Card style={styles.summaryContainer}>
                                <Text>You choosed</Text>
                                <NumberContainer>{selectedNumber}</NumberContainer>
                                <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)}/>
                            </Card>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'EduBold',
    },
    inputContainer: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
    },
    input: {
        width: '20%',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    summaryContainer: {
        marginTop: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        height: '40%'
    }
})

export default SecondScreen