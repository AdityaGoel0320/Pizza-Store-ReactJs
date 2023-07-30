import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Main';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>
    </>

  );
}

export default App;
