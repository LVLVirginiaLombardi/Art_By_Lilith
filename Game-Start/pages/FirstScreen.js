import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import Card  from '../components/Card'
import { NumberContainer } from '../components/NumberContainer'

const FirstScreen = props => {

    const [confirm, setConfirm] = useState(false);
    const [number, setNumber] = useState('');
    const [value, setValue] = useState('')
    const [currentGuess, setCurrentGuess] = useState()


    const generateRandomBetween = (min, max, userChoice) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        let randomNumber = Math.floor(Math.random() * (max - min) + min)
        if(randomNumber === userChoice) {
            return generateRandomBetween(min, max, userChoice)
        } else {
            return setCurrentGuess(randomNumber)
        }
    }
    const onHandlerReset = () => {
        setConfirm(false);
        setValue('')
    }
    const onHandlerConfirm = () => {
        let choseNumber = parseInt(value)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1) return;
        setConfirm(true);
        setNumber(parseInt(value))
        setValue('')
    }

    useEffect(() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])

    return (
        <View style={styles.screen}>
            <Text>The oponents suppose that the number is...</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title={'Reset'} onPress={() => onHandlerReset()}></Button>
                <Button title={'Confirm'} onPress={() => onHandlerConfirm()}></Button>
            </Card>
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        width: '80%',
        maxWidth: '80%',
    }
})

export default FirstScreen