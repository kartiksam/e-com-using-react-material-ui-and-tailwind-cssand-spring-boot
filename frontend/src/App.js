import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/components/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/product/Product";
import ProductDetail from "./customer/components/productDetails/ProductDetail";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import CustomerRoute from "./Router/CustomerRoute";
function App() {
  return (
    // need to setup the routing
    <div>
      {/*  for admin and customer */}
      <Routes>
        <Route path="/*" element={<CustomerRoute />}></Route>
      </Routes>

      <div></div>
      <Footer />
    </div>
  );
}

export default App;
