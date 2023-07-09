import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/about/About';
import Header from './pages/main/Header';
import Footer from './pages/main/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Main/>} />
          <Route path="about" element={<About/>}/>
          <Route path="/portfolio/:number" element={<Portfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;