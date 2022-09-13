import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {COLORS} from '../../Constants/Colors';
import React from 'react';

const GridItem = ({ item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                onPress={() => onSelected(item)}
                style={{...styles.container, backgroundColor: item.color}}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 175,
        borderRadius: 6,
        marginTop: '20%',
    },
    container: {
        flex: 1,
        borderRadius: 6,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        color: COLORS.green
    },
});

export default GridItem;