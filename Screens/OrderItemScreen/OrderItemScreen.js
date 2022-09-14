import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { deleteOrder, getOrders } from '../../store/Actions/OrderAction/order.action';
import { useDispatch, useSelector } from 'react-redux';

import OrderItem from '../../components/OrderItem/OrderItem';

const backgroundImage = require("../../assets/Drawings/ForestGray.jpeg");

const OrderItemScreen = () => {

    const dispatch = useDispatch();
    
    const orders = useSelector(state => state.order.list);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id));
    
    const renderCartItem = ({ item }) => (
        <OrderItem item={item} onDelete={onHandlerDeleteItem} />
    );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
                onRefresh={() => dispatch(getOrders())}
                refreshing={false}
            />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        padding: 10,
        marginTop: 10
    },
});

export default OrderItemScreen;