import productListReducer from "./product-reducers";
import productDetailReducer from "./single-product-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productListReducer: productListReducer,
  productDetailReducer: productDetailReducer,
});

export default rootReducer;
