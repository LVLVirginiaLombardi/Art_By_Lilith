import { FlatList, StyleSheet, View } from 'react-native';

import { ORDERS } from '../../DATA/Orders/Orders';
import OrderItem from '../../components/OrderItem/OrderItem';
import React from 'react';
const OrderItemScreen = () => {

    const orders = ORDERS
    const onHandlerDeleteItem = () => {}
    const renderCartItem = ({ item }) => (
        <OrderItem item={item} onDelete={onHandlerDeleteItem} />
    )

  return (
    <View style={styles.container}>
        <FlatList
            data={orders}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            numColumns={1}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
})

export default OrderItemScreen