import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/components/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/product/Product";
import ProductDetail from "./customer/components/productDetails/ProductDetail";
function App() {
  return ( 
    // need to setup the routing
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;
