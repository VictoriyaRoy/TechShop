import logo from './logo.svg';
import './App.css';
import HomeBody from './components/home_page'
import ShoppingCart from './components/ShoppingCart'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeBody/> 
      <Footer/> 
    </div>
  );
}

export default App;
