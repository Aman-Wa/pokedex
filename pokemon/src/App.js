import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { CoverText } from './components/CovertxtHome';
import  Footer  from './components/Footer.js';

function App() {
  return (
    <div>
    <Navbar />
    <CoverText/>
    <Footer/>
    </div>
  );
}


export default App;
