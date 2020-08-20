import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adopt from './pages/Adopt';
import Navbar from './components/Navbar';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
