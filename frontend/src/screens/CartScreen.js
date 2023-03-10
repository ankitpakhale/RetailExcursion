import React, { useEffect, useState } from "react";
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
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = () => {
  const productId = useParams().id;
  const location = useLocation(); // to get url data
  const qty = location.search ? Number(location.search.split("=")[1]) : 1; // spliting url data to get qty

  const dispatch = useDispatch();

  // to pull the data we use useSelector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    alert("Product item deleted successfully");
  };

  // Checking login status of user
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const getUserDetails = () => {
    const loginStatus = localStorage.getItem("userInfo");
    if (loginStatus) {
      setIsUserLoggedIn(!isUserLoggedIn);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant={"info"}>
            Your Cart is empty
            <Link className="p-2" to="/">
              Go Back
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>

                  <Col md={3}>
                    <Form.Control
                      as={"select"}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((qt) => (
                        <option key={qt + 1}>{qt + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Link
              to={isUserLoggedIn ? "/shipping" : "/login?redirect=shipping"}
            >
              <Button
                type="button"
                className="btn-block m-2"
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </Link>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
