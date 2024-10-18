import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Accepted } from './pages/Accepted';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Accepted" element={<Accepted />} />
  </Routes>
  );
}

export default App;
