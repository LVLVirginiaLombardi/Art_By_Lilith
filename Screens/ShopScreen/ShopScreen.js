import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { DRAWINGS } from '../../DATA/Drawings/Drawings';
import { FlatList } from 'react-native-web';
import React from 'react';

const backgroundimage = require("../../assets/background.png");

export const ShopScreen = ({ route }) => {

    const { drawing } = route.params
    
    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
                <FlatList
                    data={drawing}
                    keyExtractor={(item => item.id)}
                    renderItem={({item}) => (
                        <View style={styles.screen}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Image style={styles.image} source={item.image}/>
                            <Text>{item.description}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.format}</Text>
                        </View>
                    )}
                />
        </ImageBackground>
    )
}

/*<Button title='Want to Shop?' onPress={() => {navigation.navigate('Detail', { title: 'Parametros'})}}/>*/

const styles = StyleSheet.create({
    screen: {
        flex: 1,
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
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
    },
}) 