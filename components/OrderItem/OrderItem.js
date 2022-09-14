import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../../Constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete}) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='md-trash' color={COLORS.primary} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COLORS.charcoal,
        marginTop: 20
    },
    name: {
      color: COLORS.primary,
      fontFamily: 'RobotoRegular',
      fontSize: 18
    },
    date: {
        fontSize: 18,
        fontFamily: 'RobotoRegular',
        color: COLORS.primary
    },
    total: {
        fontSize: 18,
        fontFamily: 'RobotoMedium',
        color: COLORS.coolgray
    }
});

export default OrderItem;