import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/product/:id" exact element={<ProductScreen />} />

            <Route path="/cart/:id?" exact element={<CartScreen />} />
            {/* ? after id means id is optional. id is not mandatory */}

            <Route path="/login" exact element={<LoginScreen />} />
            <Route path="/register" exact element={<RegisterScreen />} />

            <Route path="/profile" exact element={<ProfileScreen />} />
            <Route path="/shipping" exact element={<ShippingScreen />} />
            <Route path="/payment" exact element={<PaymentScreen />} />
            <Route path="/placeorder" exact element={<PlaceOrderScreen />} />
            <Route path="/order/:id" exact element={<OrderScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
