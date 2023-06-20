import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Rwaste from './pages/3Rwaste/3Rwaste';
import GHero from './pages/GHero/GHero';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Gallery from './pages/3Rwaste/Waste';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/3Rwaste" element={<Rwaste />} />
        <Route path="/GHero" element={<GHero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

