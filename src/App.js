/* eslint-disable no-unused-vars */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import AuthRoute from './routes/AuthRoute';
import GuestRoute from './routes/GuestRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      </Routes>
    </>
  );
}

export default App;
