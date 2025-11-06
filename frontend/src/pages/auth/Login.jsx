import React, { useState } from 'react';
import '../../assets/styles/login_register.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('User');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Thêm logic nếu có
    navigate('/dashboard');
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className="login-page">
      <div className="background-overlay"><img src="" alt="" /></div>
      <div className="login-container">
        <h1 className="main-title">VolunteerHub</h1>
        <p className="subtitle">Đăng nhập tài khoản của bạn</p>

        <form id="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label className="role-label">Đăng nhập với chức năng:</label>
          <div className="role-selector">
            {['User', 'Manager', 'Admin'].map((role) => (
              <button
                key={role}
                type="button"
                className={`role-btn ${selectedRole === role ? 'selected' : ''}`}
                onClick={() => handleRoleClick(role)}
              >
                {role}
              </button>
            ))}
          </div>

          <button type="submit" className="sign-in-btn">Đăng nhập</button>
        </form>

        <p className="bottom-text">
          Bạn chưa có tài khoản?{' '}
          <a onClick={handleRegister} className="link">Đăng ký tại đây</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
