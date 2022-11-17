import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { configureStore } from "reduxjs/toolkit";

import cartItems from "./Reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = configureStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
