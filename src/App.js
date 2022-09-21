
import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js'
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js"
import Login from "./Components/Login/Login";



function App() {
  return (
   <div>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path= "/" element={<Home/>} />
      <Route path="/Login/*" element={<Login/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App;
