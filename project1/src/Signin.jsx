import React from 'react';
import './Sign.css'

const Sign = () => {
  return (
    <div className="container">
      <div className="signin-card">
        <div className="header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>
        <div className="footer">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Sign;
