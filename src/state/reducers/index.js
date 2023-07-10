import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import shopContentReducer from "./shopContent";

const rootReducer = combineReducers({
  cart: cartReducer,
  shopContent: shopContentReducer,
});

export default rootReducer;
