import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/volunteer/DashboardVolunteer';
import EventsVolunteer from "./pages/volunteer/EventsVolunteer";
import EventDetail from './pages/volunteer/EventDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<EventsVolunteer />} />
        <Route path="/eventDetail" element={<EventDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
