import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

// Calling Dispatcher for product details
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    // Getting data when page is loading at first
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {/* Below line simplified --> If loading, loading will run. If error, error will run. Else data will run */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
