import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import HomeAppliances from './pages/HomeAppliances';
import Mobiles from './pages/Mobiles';
import Computing from './pages/Computing';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/home-appliances" element={<HomeAppliances />} />
            <Route path="/computing" element={<Computing />} />
            <Route path="/accessories" element={<Computing />} />
            <Route path="/wishlist" element={<Computing />} />
            <Route path="/cart" element={<Computing />} />
            <Route path="/userprofile" element={<Computing />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
