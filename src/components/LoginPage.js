import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For demonstration purposes, let's assume the user is authenticated
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h1 className='header'>Welcome Back</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
