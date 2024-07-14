import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeAppliances from './pages/HomeAppliances';
import Mobile from './pages/Mobile';
import Gadgets from './pages/Gadgets';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/home-appliances" element={<HomeAppliances />} />
            <Route path="/gadgets" element={<Gadgets />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
