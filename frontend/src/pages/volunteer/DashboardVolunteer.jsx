import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';
import '../../assets/styles/home.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content" id="main-content">
        <header className="main-header">
          <h1>Dashboard</h1>
          <div className="user-info">
            <span className="user-avatar">A</span>
            <span className="user-name">User Name</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <section className="welcome-section">
          <div className="welcome-card">
            <h2>Xin chào, User!</h2>
            <p>Sau đây là những hoạt động tình nguyện đang diễn ra ngày hôm nay.</p>
          </div>
        </section>

        <section className="event-summary">
          <div className="event-card new">
            <h3>Sự kiện mới được công bố</h3>
            <p>3 sự kiện vừa được công bố</p>
            <a>Xem chi tiết</a>
          </div>
          <div className="event-card news">
            <h3>Sự kiện có bình luận mới</h3>
            <p>2 sự kiện có bình luận mới</p>
            <a>Xem chi tiết</a>
          </div>
          <div className="event-card trending">
            <h3>Sự kiện nổi bật</h3>
            <p>+20 tình nguyện viên tham gia</p>
            <a>Xem chi tiết</a>
          </div>
        </section>

        <section className="event-attract">
          <h2>Các sự kiện nổi trội nhất</h2>
          <div className="attract-list">
            <div className="attract-item">
              <h4>Mùa hè xanh</h4>
              <span>+12 members • 5 new posts • 30 likes</span>
            </div>
            <div className="attract-item">
              <h4>Biển sạch</h4>
              <span>+8 members • 2 new posts • 18 likes</span>
            </div>
            <div className="attract-item">
              <h4>Hiến máu - Hành trình đỏ</h4>
              <span>+6 members • 3 new posts • 22 likes</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
