import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home' 
import Projects from './components/Projects' 
import Contact from './components/Contact' 

function App() {
  
  return (
     <Router>
     <Header /> 
    
     <Routes >
      
       <Route path="/" element={<Home />} />
        <Route path="projects/*" element={<Projects />} />  
        <Route path="contact" element={<Contact />} /> 
      
      
    </Routes>
   </Router>

  )
}

export default App
