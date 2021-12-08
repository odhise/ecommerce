import React from "react";

import Home from './pages/Home';
import productPage from './pages/ProductPage'
import './App.css';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Cart from  "./pages/Cart";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/SignUp" element={<SignUp/>}/>


      </Routes>
      </Router>
  
   
  );
}

export default App;
