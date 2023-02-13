// 1. register reducer in combineReducers
// 2. get the data inside a variable using ternary operator
// 3. assign required data(above line) in initialState

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

import {
  userDetailsReducers,
  userLoginReducers,
  userRegisterReducers,
  userUpdateProfileReducers,
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateProfileReducers,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []; // if we don't get value, we'll assign blank array

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null; // if we don't get value, we'll assign null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
