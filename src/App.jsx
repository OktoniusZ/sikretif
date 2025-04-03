import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/article" element={<Article />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
