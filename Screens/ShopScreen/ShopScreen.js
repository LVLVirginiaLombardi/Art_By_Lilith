import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {COLORS} from '../../Constants/Colors';
import OutlinedButton from '../../UI/OutlinedButton/OutlinedButton';
import React from 'react';
import { addItem } from '../../store/Actions/CartAction/cart.action';

const backgroundimage = require("../../assets/Drawings/ForestGray.jpeg");

export const ShopScreen = () => {

    const dispatch = useDispatch();

    const drawing = useSelector(store => store.drawings.selected);
    
    const handlerAddItemCart = () => dispatch(addItem(drawing));

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <View style={styles.screen}>
                <Text style={styles.title}>Drawing: {drawing.name}</Text>
                <View style={styles.container}>
                    <Image style={styles.image} source={drawing.image}/>
                    <View style={styles.info}>
                        <Text style={styles.text}>Category: {drawing.description}</Text>
                        <Text style={styles.text}>Price: ${drawing.price}</Text>
                        <Text style={styles.text}>Format: {drawing.format}</Text>
                    </View>
                </View>
                
                <OutlinedButton onPress={handlerAddItemCart} icon={"cart"}>
                    Add to Cart
                </OutlinedButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 28,
        marginLeft: 10,
        marginBottom: '40%',
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        flexDirection: 'column'
    },
    title: {
        fontSize: 25,
        fontFamily: 'RobotoBold',
        marginTop: 30,
        color: COLORS.platinum
    },
    image: {
        width: 220,
        height: '70%',
        borderRadius: 15,
        marginBottom: '10%'
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    text: {
        color: COLORS.green,
        fontSize: 15,
        fontFamily: 'RobotoRegular'
    },
})