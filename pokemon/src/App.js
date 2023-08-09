import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import  Footer  from './components/Footer.js';
import Home from './Pages/Home';
import Legendaries from './Pages/Legendaries';
import Pokedex from './Pages/Pokedex';
import Documentation from './Pages/Documentation';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legendaries" element={<Legendaries />} />
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="/documentation" element={<Documentation/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}


export default App;
