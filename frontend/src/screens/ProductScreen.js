import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const paramId = useParams().id;

  const dispatch = useDispatch();

  // 1. to pass the data in html page, getting data from redux store
  // 2. productDetails Calling from store
  // BELOW 2 LINES ONLY
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(paramId));
  }, [dispatch, paramId]);

  return (
    <div>
      <Link to={"/"} className="btn btn-light my-3">
        Go back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup varient="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    disabled={product.countInStock == 0}
                    className="btn-block"
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
