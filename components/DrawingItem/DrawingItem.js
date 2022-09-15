import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const DrawingItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.drawingItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>Price: ${item.price}</Text>
                    <Text style={styles.details}>Format: {item.format}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    drawingItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        width: '80%',
        marginLeft: 40,
        borderRadius: 10,
        padding: 6,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.blue,
        borderWidth: 1.5
    },
    title: {
        fontFamily: 'RobotoMedium',
        fontSize: 25,
        color: COLORS.violet
    },
    details: {
        fontSize: 18,
        fontFamily: 'RobotoRegular',
        color: COLORS.blue
    }
});

export default DrawingItem;