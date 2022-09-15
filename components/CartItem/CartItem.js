import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export const CartItem = ({ item, onDelete}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>Drawing Name: {item.name}</Text>
      </View>
      <View style={styles.detail}>
        <View>
            <Text style={styles.text}>Quantity: {item.quantity}</Text>
            <Text style={styles.text}>Price: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='trash' color={COLORS.primary} size={24}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.platinum
    },
    header: {
        fontSize: 18,
        fontFamily: 'RobotoBlack',
        color: COLORS.greenlight,
        marginBottom: 10
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    text: {
      color: COLORS.greenlight,
      fontFamily: 'RobotoMedium',
      fontSize: 16
    },
});