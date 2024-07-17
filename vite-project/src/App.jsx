import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeAppliances from './pages/HomeAppliances';
import Mobile from './pages/Mobile';
import Computing from './pages/Computing';
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
