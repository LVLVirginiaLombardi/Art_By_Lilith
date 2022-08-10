import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {CartItem} from '../../components/CartItem/CartItem';
import React from 'react';
import { removeItem } from '../../store/Actions/CartAction/cart.action';

const CartScreen = () => {

  const dispatch = useDispatch();
  const { items, total } = useSelector(store => store.cart);

  const handleConfirmCart = () => {
    console.log('Confirm Product');
  } 

  const handlerDeleteItem = (id) => {
    dispatch(removeItem(id))
  };

  const renderItems = ({item}) => {
    return (
      <CartItem item={item} onDelete={handlerDeleteItem} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirm</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'RobotoMedium',
    padding: 8,
  }
})


export default CartScreen