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
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc',
    },
    title: {
        fontFamily: 'RobotoMedium',
        fontSize: 20,
    },
    details: {
        fontSize: 18
    }
})

export default DrawingItem