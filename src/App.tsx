import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useEffect } from "react";
import { fetchProducts } from "../src/store/slices/productsSlice";
import { useAppDispatch } from "./store";
import { ToastContainer } from "react-toastify";
import CheckoutSuccess from "./pages/CheckoutSuccess/CheckoutSuccess";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/help" element={<Help />} />
        <Route path="/termofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
      </Routes>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </BrowserRouter>
  );
}

export default App;
