import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { filteredDrawing, selectDrawing } from '../../store/Actions/DrawingAction/drawing.action';
import { useDispatch, useSelector } from 'react-redux';

import DrawingItem from '../../components/DrawingItem/DrawingItem';

const backgroundimage = require("../../assets/background.png");

export const DetailScreen = ({navigation, route}) => {

    const dispatch = useDispatch();
    
    const categoryDrawings = useSelector(store => store.drawings.filteredDrawing);
    
    const category = useSelector(store => store.categories.selected);
    
    useEffect(() => {
        dispatch(filteredDrawing(category.id))
    },[]);

    const handleSelected = (item) => {
        dispatch(selectDrawing(item.id))
        navigation.navigate('Shop', {
            drawing: item.name
        })
    };
    
    const renderItemDrawing = ({ item }) => (
        <DrawingItem item={item} onSelected={handleSelected} />
        
    );

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <FlatList
                data={categoryDrawings}
                renderItem={renderItemDrawing}
                keyExtractor={item => item.id}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
});
