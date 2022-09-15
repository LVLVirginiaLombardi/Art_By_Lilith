import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { confirmCart, removeItem } from '../../store/Actions/CartAction/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import {COLORS} from '../../Constants/Colors';
import { CartItem } from '../../components/CartItem/CartItem';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const backgroundImage = require("../../assets/Drawings/BlackForest.jpeg");

const CartScreen = () => {

  const dispatch = useDispatch();
  
  const { items, total } = useSelector(store => store.cart);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
  };

  const handlerDeleteItem = (id) => {
    dispatch(removeItem(id))
  };

  const renderItems = ({item}) => {
    return (
      <CartItem item={item} onDelete={handlerDeleteItem} />
    )
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
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
            <Ionicons name={"wallet"} style={styles.icon}>
              <Text style={styles.wallet}>  Confirm Your Purchase</Text>
            </Ionicons>
            <View style={styles.total}>
              <Text style={styles.text}>  Total :</Text>
              <Text style={styles.text}>${total}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    padding: 12,
    paddingBottom: 120
  },
  list: {
    flex: 1
  },
  footer: {
    padding: 12,
    borderTopColor: COLORS.platinum,
    borderTopWidth: 1
  },
  confirm: {
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    borderColor: COLORS.platinum,
    borderWidth: 1
  },
  wallet: {
    fontFamily: 'RobotoRegular',
    fontSize: 15,
    color: COLORS.platinum
  },
  icon: {
    fontSize: 20,
    marginLeft: 5,
    color: COLORS.platinum
  },
  total: {
    flexDirection: 'row',
    fontFamily: 'RobotoRegular'
  },
  text: {
    fontSize: 18,
    fontFamily: 'RobotoMedium',
    padding: 8,
    color: COLORS.platinum
  }
});

export default CartScreen;