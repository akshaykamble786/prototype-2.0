import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Appliances from './pages/Appliances';
import Mobiles from './pages/Mobiles';
import Computing from './pages/Computing';
import Footer from './components/Footer';
import Accessories from './pages/Accessories';
import NotFound404 from './components/404NotFound';
import UserProfile from './pages/UserProfile.jsx';
import Cart from './pages/Cart.jsx'
import ProductDetail from './components/ProductDetail.jsx';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:id" element={<Mobiles />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/computing" element={<Computing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="*" element={<NotFound404 />} /> 
          <Route path="/product-detail" element={<ProductDetail/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
