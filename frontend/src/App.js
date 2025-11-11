import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import EventPosts from './components/post/EventPosts'
import EventsVolunteer from "./pages/volunteer/EventsVolunteer";
import History from './pages/volunteer/History';
import Notification from './pages/volunteer/Notification';
import EventManagement from './pages/manager/EventManagement';
import VolunteerApproval from './pages/manager/VolunteerApproval';
import VolunteerList from './pages/manager/VolunteerList';
import VolunteerCompleted from './pages/manager/VolunteerCompleted';
import EventApproval from './pages/admin/EventApproval';
import UserManagement from './pages/admin/UserManagement';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eventPosts" element={<EventPosts />} />
        <Route path="/events" element={<EventsVolunteer />} />
        <Route path="/history" element={<History />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/manager/events" element={<EventManagement />} />
        <Route path="/manager/approve" element={<VolunteerApproval />} />
        <Route path="/manager/volunteerList" element={<VolunteerList />} />
        <Route path="/manager/volunteerCompleted" element={<VolunteerCompleted />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/events" element={<EventApproval />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
