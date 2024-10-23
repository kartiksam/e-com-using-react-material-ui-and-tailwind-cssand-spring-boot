import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../customer/components/pages/HomePage";
import Cart from "./../customer/components/cart/Cart";
import Navigation from "./../customer/components/navigation/Navigation";

// tailwind comonents mui icons or mui compmonets
const CustomerRoute = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetail /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoute;
