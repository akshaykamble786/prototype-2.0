// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Products from './pages/Products';
// import Appliances from './pages/Appliances';
// import Mobiles from './pages/Mobiles';
// import Computing from './pages/Computing';
// import Footer from './components/Footer'
// import Accessories from './pages/Accessories';
// import NotFound404 from './components/404NotFound';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/mobiles" element={<Mobiles />} />
//             <Route path="/appliances" element={<Appliances />} />
//             <Route path="/computing" element={<Computing />} />
//             <Route path="/accessories" element={<Accessories />} />
//             <Route path="/cart" element={<Products />} />
//             <Route path="/userprofile" element={<Products />} />
//             <Route path="*" element={<NotFound404 />} />
//           </Routes>
//         </main>
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;



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

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const is404Page = location.pathname !== '/' && !['/products', '/mobiles', '/appliances', '/computing', '/accessories', '/cart', '/userprofile'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!is404Page && <Navbar />}
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
          <Route path="*" element={<NotFound404 />} /> 
        </Routes>
      </main>
      {!is404Page && <Footer />}
    </div>
  );
}

export default App;
