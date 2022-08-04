import { FlatList, ImageBackground, StyleSheet } from 'react-native';

import { CATEGORIES } from '../../DATA/Categories/Categories';
import GridItem from '../../components/GirdItem/GridItem';
import React from 'react';

const backgroundimage = require("../../assets/background.png");

export const HomeScreen = ({ navigation }) => {

    const handleSelectedCategory = (item) => {
        navigation.navigate('Detail', {
            categoryID: item.id,
            name: item.title
        });
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
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