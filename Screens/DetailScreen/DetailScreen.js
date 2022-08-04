import { FlatList, ImageBackground, StyleSheet } from 'react-native';

import { DRAWINGS } from '../../DATA/Drawings/Drawings';
import DrawingItem from '../../components/DrawingItem/DrawingItem';
import React from 'react';

const backgroundimage = require("../../assets/background.png");

export const DetailScreen = ({navigation, route}) => {

    const Drawings = DRAWINGS.filter(drawing => drawing.category === route.params.categoryID)
    const handleSelected = (item) => {
        navigation.navigate('Shop', {
            drawing: item
        })
    }

    const renderItemDrawing = ({ item }) => (
        <DrawingItem item={item} onSelected={handleSelected} />
    )

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <FlatList
                data={Drawings}
                renderItem={renderItemDrawing}
                keyExtractor={item => item.id}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
}) 
