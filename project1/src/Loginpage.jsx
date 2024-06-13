import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="signup-card">
        <div className="header">
          <h2>Welcome</h2>
          <p>Create your account</p>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="footer">
          <p>Already have an account? <a href="#">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
