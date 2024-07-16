import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeAppliances from './pages/HomeAppliances';
import Mobile from './pages/Mobile';
import Gadgets from './pages/Gadgets';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobiles" element={<Mobile />} />
            <Route path="/home-appliances" element={<HomeAppliances />} />
            <Route path="/computing" element={<Gadgets />} />
            <Route path="/accessories" element={<Gadgets />} />
            <Route path="/wishlist" element={<Gadgets />} />
            <Route path="/cart" element={<Gadgets />} />
            <Route path="/userprofile" element={<Gadgets />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
