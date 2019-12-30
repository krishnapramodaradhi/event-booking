import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [clicked, setClicked] = useState(false);

  const isClickedHandler = () => setClicked(!clicked);

  return (
    <div className="form-container">
      <h3>{clicked ? 'Login' : 'Signup'}</h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="btn-container">
          <button className="btn">{clicked ? 'login' : 'signup'}</button>
        </div>
      </form>
      <p className="form-footer">
        Need to {!clicked ? 'login' : 'signup'}? Click{' '}
        <span onClick={isClickedHandler}>here</span>
      </p>
    </div>
  );
};

export default Auth;
