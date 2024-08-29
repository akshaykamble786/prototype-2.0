// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Products from './pages/Products';
// import Appliances from './pages/Appliances';
// import Mobiles from './pages/Mobiles';
// import Computing from './pages/Computing';
// import Footer from './components/Footer';
// import Accessories from './pages/Accessories';
// import NotFound404 from './components/404NotFound';
// import Cart from './pages/Cart.jsx'
// import ProductDetail from './components/ProductDetail.jsx';
// import Accountce from './pages/Account.jsx';
// import Orders from './pages/Orders.jsx';
// import Account from './pages/Account.jsx';
// import Wishlist from './pages/Wishlist.jsx';
// import AdminPanel from './pages/AdminPanel.jsx';

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// function Layout() {

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Products />} />
//           <Route path="/mobiles" element={<Mobiles />} />
//           <Route path="/mobiles/:id" element={<Mobiles />} />
//           <Route path="/appliances" element={<Appliances />} />
//           <Route path="/computing" element={<Computing />} />
//           <Route path="/accessories" element={<Accessories />} />
//           <Route path="/cart" element={<Cart/>} />
//           <Route path="*" element={<NotFound404 />} /> 
//           <Route path="/product-detail" element={<ProductDetail/>}/>
//           <Route path="/orders" element={<Orders/>}/>
//           <Route path="/account" element={<Account/>}/>
//           <Route path="/wishlist" element={<Wishlist/>}/>
//           <Route path="/admin" element={<AdminPanel/>}/>
          
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Appliances from './pages/Appliances';
import Mobiles from './pages/Mobiles';
import Computing from './pages/Computing';
import Footer from './components/Footer';
import Accessories from './pages/Accessories';
import NotFound404 from './components/404NotFound';
import Cart from './pages/Cart.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Account from './pages/Account.jsx';
import Orders from './pages/Orders.jsx';
import Wishlist from './pages/Wishlist.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import { ProductProvider } from '../context/ProductsContext.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Layout />
      </Router>
    </ProductProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


