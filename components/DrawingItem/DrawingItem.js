import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const DrawingItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.drawingItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.format}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    drawingItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 30,
        borderRadius: 6,
        backgroundColor: '#F2D1C9',
    },
    title: {
        fontFamily: 'RobotoMedium',
        fontSize: 25,
    },
    details: {
        fontSize: 18,
        fontFamily: 'RobotoRegular',
    }
})

export default DrawingItem