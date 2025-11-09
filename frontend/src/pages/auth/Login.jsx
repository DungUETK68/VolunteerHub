import React, { useState } from 'react';
import '../../assets/styles/login_register.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import backgroundImg from '../../assets/images/background.webp'

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [selectedRole, setSelectedRole] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleMap = { User: 'volunteer', Manager: 'manager', Admin: 'admin' };
    const role = roleMap[selectedRole] || 'volunteer';

    const userObj = {
      id: Date.now(),
      name: email ? email.split('@')[0] : 'Người dùng',
      email,
      role,
    };

    login(userObj);
    navigate('/dashboard');
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className="login-page">
      <div className="background-overlay"><img src={backgroundImg} alt="" /></div>
      <div className="login-container">
        <h1 className="main-title">VolunteerHub</h1>
        <p className="subtitle">Đăng nhập tài khoản của bạn</p>

        <form id="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

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