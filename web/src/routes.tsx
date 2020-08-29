import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetsIndex from './pages/PetsIndex';
import Navbar from './components/Navbar';
import PetsShow from './pages/PetsShow';
import CreatePet from './pages/CreatePet';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/pets" element={<PetsIndex />} />
        <Route path="/pets/:id" element={<PetsShow />} />
        <Route path="/pets/create" element={<CreatePet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
