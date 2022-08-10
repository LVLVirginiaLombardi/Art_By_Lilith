import { ADD_ITEM, REMOVE_ITEM } from '../../Actions/CartAction/cart.action';

import { CART } from '../../../DATA/Cart/Cart';

const INITIAL_STATE = {
    items: CART,
    total: 27000,
};

const sumTotal = (list) => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(type.action) {
        
        case ADD_ITEM:
            let updatedCart = [];

            if (state.items.find(item => item.id === action.item.id)) {
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1 };
                updatedCart = [...state.items, item];
            }

            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            };

            case REMOVE_ITEM:
                const filteredCart = state.items.filter(item => item.id !== action.itemID);
                return {
                    ...state,
                    items: filteredCart,
                    total: sumTotal(filteredCart)
                };
    }
};

export default CartReducer;