import './App.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import HomeBody from './components/home_page/home_page';
import ProductsBody from "./components/products_list/products";
import DescriptionPage from './components/product_description/DescriptionPage';
import { CartProvider } from './components/contexts/CartContext';
import { DeviceProvider } from './components/contexts/DeviceContext';
import { FilterProvider } from './components/contexts/FilterContext';
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <DeviceProvider>
                <CartProvider>
                    <FilterProvider>
                        <Header />
                        <Routes>
                            <Route exact path="/" element={<HomeBody />} />
                            <Route exact path=":category" element={<ProductsBody />} />
                            <Route path="device_:id" element={<DescriptionPage />} />
                        </Routes>
                    </FilterProvider>
                </CartProvider>
            </DeviceProvider>
            <Footer />
        </div>
    );
}

export default App;
