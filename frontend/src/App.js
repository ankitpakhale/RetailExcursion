import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/products/:id" exact element={<ProductScreen />} />
            <Route path="/cart/:id?" exact element={<CartScreen />} />
            {/* ? after id means id is optional. id is not mandatory */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
