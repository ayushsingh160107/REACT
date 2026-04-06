import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'  
import './App.css'
import News from './components/News'
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs'
function App() {



  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
    <Header/>
    <News/>
    <Footer/>

          </>
  )
}

export default App
