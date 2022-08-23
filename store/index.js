import { applyMiddleware, combineReducers, createStore } from 'redux';

import AuthReducer from './Reducers/AuthReducer/auth.reducer';
import CartReducer from './Reducers/CartReducer/cart.reducer';
import CategoryReducer from './Reducers/CategoryReducer/category.reducer';
import DrawingReducer from './Reducers/DrawingReducer/drawing.reducer';
import OrderReducer from './Reducers/OrderReducer/order.reducer';
import PlaceReducer from './Reducers/PlaceReducer/place.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    drawings: DrawingReducer,
    cart: CartReducer,
    order: OrderReducer,
    auth: AuthReducer,
    places: PlaceReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));