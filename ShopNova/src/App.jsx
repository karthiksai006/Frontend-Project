import React from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';  

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
