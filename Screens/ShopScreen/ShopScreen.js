import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { addItem } from '../../store/Actions/CartAction/cart.action';

const backgroundimage = require("../../assets/background.png");

export const ShopScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const drawing = useSelector(store => store.drawings.selected)
    
    const handlerAddItemCart = () => dispatch(addItem(drawing));

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <View style={styles.screen}>
                <Text style={styles.title}>{drawing.name}</Text>
                <Image style={styles.image} source={drawing.image}/>
                <View style={styles.info}>
                    <Text>{drawing.description}</Text>
                    <Text>{drawing.price}</Text>
                    <Text>{drawing.format}</Text>
                </View>
                <Button title='Add to Cart' onPress={handlerAddItemCart} />
                <Ionicons name='cart' size={30} color='#462749' />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30,
        height: 150,
        borderRadius: 6,
    },
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontFamily: 'RobotoBold',
        marginBottom: 15,
    },
    image: {
        flex: 1,
        width: 200,
        height: 100,
        borderRadius: 10, 
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8332AC',
        height: 100,
        width: 100,
        marginBottom: 40,
        marginTop: 10,
    },
})