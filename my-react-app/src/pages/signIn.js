import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { loginUser } from "../actions/user.action";
import { useNavigate } from 'react-router-dom';

const SignIn = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await loginUser({ email, password });
      navigate('/user');
    } catch (error) {
      setErrorMessage('Informations de connexion invalides');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="circle-user" />
        <h1>Sign In</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              value={email}
              onChange={setEmailHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={setPasswordHandler}
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => dispatch(loginUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
