import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adopt from './pages/Adopt';
import Header from './components/Header';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
