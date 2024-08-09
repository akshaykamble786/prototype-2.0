import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Appliances from './pages/Appliances';
import Mobiles from './pages/Mobiles';
import Computing from './pages/Computing';
import Footer from './components/Footer'
import Accessories from './pages/Accessories';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/computing" element={<Computing />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Products />} />
            <Route path="/userprofile" element={<Products />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
