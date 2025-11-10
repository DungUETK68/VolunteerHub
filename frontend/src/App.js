import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/volunteer/DashboardVolunteer';
import EventsVolunteer from "./pages/volunteer/EventsVolunteer";
import EventDetail from './pages/volunteer/EventDetail';
import History from './pages/volunteer/History';
import Notification from './pages/volunteer/Notification';
import EventManagement from './pages/manager/EventManagement';
import UserList from './pages/admin/UserManagement';
import EventApproval from './pages/admin/EventApproval';
import VolunteerApproval from './pages/manager/VolunteerApproval'
import VolunteerList from './pages/manager/VolunteerList';
import VolunteerCompleted from './pages/manager/VolunteerCompleted'

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<EventsVolunteer />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/manager/events" element={<EventManagement />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/events" element={<EventApproval />} />
        <Route path="/manager/approve" element={<VolunteerApproval />} />
        <Route path="/manager/volunteerList" element={<VolunteerList />} />
        <Route path="/manager/volunteerCompleted" element={<VolunteerCompleted />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
