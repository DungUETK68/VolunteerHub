import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import NotFound from '../pages/notfound/NotFound';
import AdminRoutes from './AdminRoutes';
import ManagerRoutes from './ManagerRoutes';
import VolunteerRoutes from './VolunteerRoutes';
import Dashboard from '../pages/volunteer/DashboardVolunteer';

const AppRouter = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Roles */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/manager/*" element={<ManagerRoutes />} />
      <Route path="/volunteer/*" element={<VolunteerRoutes />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
