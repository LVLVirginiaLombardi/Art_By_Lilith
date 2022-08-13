import { DELETE_ORDER, GET_ORDERS } from "../../Actions/OrderAction/order.action";

const initalState = {
    list: [],
};

const OrderReducer = (state = initalState, action) => {
    switch (action.type) {
        
        case GET_ORDERS:
            return {
                ...state,
                list: action.payload,
            };
            
        case DELETE_ORDER:
            const filteredOrders = state.list.filter(item => item.id !== action.orderID);
            return {
                ...state,
                list: filteredOrders,
            };

        default:
            return state
    }
}

export default OrderReducer;