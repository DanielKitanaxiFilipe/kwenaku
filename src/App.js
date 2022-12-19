import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style/global.scss'
import Home from './pages/Home';
import Dashbord from './pages/Dashbord';
import Empresa from './pages/Empresa';
import Usuario from './pages/Usurario';
import Perfil from './pages/Perfil';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashbord" element={<Dashbord/>}/>
      <Route path="/empresa" element={<Empresa/>}/>
      <Route path="/usuario" element={<Usuario/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
  </Router>);
}

export default App;
