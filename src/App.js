import './App.css';
import HomeBody from './components/home_page/home_page';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import { CartProvider } from './components/contexts/CartContext';
import { DeviceProvider } from './components/contexts/DeviceContext';
import { Route, Routes } from "react-router-dom";
import ProductsBody from "./components/products_list/products";
import DescriptionPage from './components/product_description/DescriptionPage';

function App() {
  return (
    <div className="App">
      <DeviceProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeBody />} />
            <Route exact path=":category" element={<ProductsBody />} />
            <Route path="device_:id" element={<DescriptionPage />} />
          </Routes>
        </CartProvider>
      </DeviceProvider>
      <Footer />
    </div>
  );
}

export default App;
