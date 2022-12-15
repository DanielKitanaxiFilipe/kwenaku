import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style/global.scss'
import Home from './pages/Home';
import Dashbord from './pages/Dashbord';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashbord" element={<Dashbord/>}/>
    </Routes>
  </Router>);
}

export default App;
