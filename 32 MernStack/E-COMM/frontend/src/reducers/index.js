import productListReducer from "./product-reducers";
import productDetailReducer from "./single-product-reducer";
import loginReducer from "./signin";
import orderListReducer from './orders-reducers'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productListReducer: productListReducer,
  productDetailReducer: productDetailReducer,
  loginReducer: loginReducer,
  orderListReducer: orderListReducer,
});

export default rootReducer;
