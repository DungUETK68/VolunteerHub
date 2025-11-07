import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/dashboard');
  }

  const handleEvents = () => {
    navigate('/events')
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>VolunteerHub</h2>
      </div>
      <nav className="sidebar-nav">
        <ul id="sidebar-tabs">
          <li className="dashboard-tab" onClick={handleDashboard}><span>🏠</span> Dashboard</li>
          <li className="events-tab" onClick={handleEvents}><span>📅</span> Sự kiện</li>
          <li className="my-events-tab"><span>📅</span> Sự kiện của tôi</li>
          <li className="notifications-tab"><span>🔔</span> Thông báo</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
