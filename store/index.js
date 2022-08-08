import { combineReducers, createStore } from 'redux';

import CategoryReducer from './Reducers/CategoryReducer/category.reducer';
import DrawingReducer from './Reducers/DrawingReducer/drawing.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    drawings: DrawingReducer
})

export default createStore(RootReducer);