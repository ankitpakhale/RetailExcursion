import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // getting data from API call
  const { data } = await axios.get(`/api/product/${id}`);

  // dispatching api data
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // setting dispatch data inside localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); // going to store to get cart from combineReducers and cart has cartItems
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); // going to store to get cart from combineReducers and cart has cartItems
};
