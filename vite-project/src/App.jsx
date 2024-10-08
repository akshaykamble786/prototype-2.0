import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Products.jsx";
import Appliances from "./pages/Appliances";
import Mobiles from "./pages/Mobiles";
import Computing from "./pages/Computing";
import Footer from "./components/Footer";
import Accessories from "./pages/Accessories";
import NotFound404 from "./components/404NotFound";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Orders from "./pages/Orders.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { Toaster } from 'sonner'

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
      <Toaster/>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

         {/* Product Listing Pages */}
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/computing" element={<Computing />} />
          <Route path="/accessories" element={<Accessories />} />

          {/* Dynamic Product Details Pages */}
          <Route path="/mobiles/:id" element={<ProductDetails />} />
          <Route path="/appliances/:id" element={<ProductDetails />} />
          <Route path="/computing/:id" element={<ProductDetails />} />
          <Route path="/accessories/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
