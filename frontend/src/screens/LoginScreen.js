import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const location = useLocation(); // to get url data
  const redirect = location.search ? location.search.split("=")[1] : "/"; // spliting url data to get qty

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const navigate = useNavigate(); // instead of history (react-router-dom v4) we use navigate in (react-router-dom v6)

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [redirect, navigate, userInfo]);

  return (
    <FormContainer className="">
      <h1>Sign In</h1>

      {error && <Message variant={"danger"}>{error}</Message>}

      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-2">
          Sign In
        </Button>
      </Form>

      <Row>
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
