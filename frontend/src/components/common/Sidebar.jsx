import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home.css';
import { useAuth } from '../../contexts/AuthContext';

function Sidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'volunteer';

  const menus = {
    volunteer: [
      { key: 'dashboard', label: 'Dashboard', icon: '🏠', to: '/dashboard' },
      { key: 'events', label: 'Sự kiện', icon: '📅', to: '/events' },
      { key: 'my-events', label: 'Sự kiện của tôi', icon: '📋', to: '/history' },
      { key: 'notifications', label: 'Thông báo', icon: '🔔', to: '/notification' },
    ],
    manager: [
      { key: 'dashboard', label: 'Dashboard', icon: '🏠', to: '/dashboard' },
      { key: 'events', label: 'Quản lý sự kiện', icon: '🛠️', to: '/manager/events' },
      { key: 'VolunteerList', label: 'Danh sách tình nguyện viên', icon: '📋', to: '/volunteerList' },
    ],
    admin: [
      { key: 'dashboard', label: 'Dashboard', icon: '🏠', to: '/dashboard' },
      { key: 'events', label: 'Quản lý sự kiện', icon: '🛠️', to: '/admin/events' },
      { key: 'user-management', label: 'Quản lý người dùng', icon: '👥', to: '/admin/users' },
    ],
  };

  const items = menus[role] || menus.volunteer;

  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>VolunteerHub</h2>
      </div>
      <nav className="sidebar-nav">
        <ul id="sidebar-tabs">
          {items.map((it) => (
            <li key={it.key} onClick={() => handleNavigate(it.to)}>
              <span style={{ marginRight: 8 }}>{it.icon}</span>
              {it.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;