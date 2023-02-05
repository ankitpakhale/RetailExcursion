import React, { useEffect } from "react";
import {
  Card,
  Form,
  Button,
  Col,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = () => {
  const productId = useParams().id;
  const location = useLocation(); // to get url data
  const qty = location.search ? Number(location.search.split("=")[1]) : 1; // spliting url data to get qty

  const dispatch = useDispatch();

  // to pull the data we use useSelector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.info("cartItems: ", cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;
