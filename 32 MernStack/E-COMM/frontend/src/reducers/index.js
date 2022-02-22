import productListReducer from "./product-reducers";
import productDetailReducer from "./single-product-reducer";
import loginReducer from "./signin";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productListReducer: productListReducer,
  productDetailReducer: productDetailReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
