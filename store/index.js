import { applyMiddleware, combineReducers, createStore } from 'redux';

import CartReducer from './Reducers/CartReducer/cart.reducer';
import CategoryReducer from './Reducers/CategoryReducer/category.reducer';
import DrawingReducer from './Reducers/DrawingReducer/drawing.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    drawings: DrawingReducer,
    cart: CartReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));