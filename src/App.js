import './App.css';
import HomeBody from './components/home_page/home_page'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'

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
