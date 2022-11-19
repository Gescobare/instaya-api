import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Orders from './pages/Orders';
import Orderadd from './pages/Orderadd';
import Ordern from './pages/Ordern';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orderadd" element={<Orderadd />} />
        <Route path="/1" element={<Ordern />} />
      </Routes>
    </Router>
  )
}

export default App