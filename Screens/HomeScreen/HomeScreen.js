import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GridItem from '../../components/GirdItem/GridItem';
import React from 'react';
import { selectCategory } from '../../store/Actions/CategoryAction/category.action';

const backgroundimage = require("../../assets/background.png");

export const HomeScreen = ({ navigation }) => {

    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
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
                data={categories}
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