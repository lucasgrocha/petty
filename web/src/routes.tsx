import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adopt from './pages/Adopt';
import Navbar from './components/Navbar';
import Pets from './pages/Pets'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/pets/:id" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
