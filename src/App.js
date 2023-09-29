import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";

import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";

export default function App() {
  return (
    <>
    <CartProvider>
 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}
