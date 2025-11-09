import React, { useState } from 'react';
import '../../assets/styles/login_register.css';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../assets/images/background.webp'

function Register() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('User');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Thêm logic đăng ký nếu có
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className="register-page">
      <div className="background-overlay"><img src={backgroundImg} alt="" /></div>
      <div className="register-container">
        <h1 className="main-title">VolunteerHub</h1>
        <p className="subtitle">Tạo tài khoản của bạn</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Họ Tên</label>
          <input type="text" id="fullname" name="fullname" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <label className="role-label">Đăng ký với chức năng:</label>
          <div className="role-selector">
            {['User', 'Manager'].map((role) => (
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

          <button type="submit" className="create-account-btn">Đăng ký</button>
        </form>

        <p className="bottom-text">
          Bạn đã có tài khoản?{' '}
          <a onClick={handleLogin} className="link">Đăng nhập tại đây</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
