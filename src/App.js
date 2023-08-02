import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Main';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import About from './pages/About';
import SingleItemPage from './pages/SingleItemPage';
import {CartContext} from './CartContext';
import BasicExample from './components/NewNavbar';

function App() {
  return (
    <>
<div className="body"></div>
    <CartContext.Provider value={{name : "Aditya Goel"}} >


        {/* <Navbar /> */}
        <BasicExample/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:_id" element={<SingleItemPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
    </CartContext.Provider>

    </>

  );
}

export default App;
