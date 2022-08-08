import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

const backgroundimage = require("../../assets/background.png");

export const ShopScreen = () => {

    const drawing = useSelector(store => store.drawings.selected)
    
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
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        height: 150,
        borderRadius: 6,
        marginTop: '15%',
    },
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontFamily: 'RobotoBold',
        marginBottom: 10,
    },
    image: {
        flex: 1,
        width: 200,
        height: 100,
        borderRadius: 6, 
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8332AC',
        height: 80,
        width: 80,
        margin: 10,
    },
}) 