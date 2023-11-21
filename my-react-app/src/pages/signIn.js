import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { postUser } from "../actions/user.action";
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate

const SignIn = ({ postUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const validUser1 = {
      email: 'tony@stark.com',
      password: 'password123',
    };

    const validUser2 = {
      email: 'steve@rogers.com',
      password: 'password456',
    };

    if ((email === validUser1.email && password === validUser1.password) || (email === validUser2.email && password === validUser2.password)) {
      postUser({ email, password });
      navigate('/user'); // Utilisation de navigate pour la redirection
    } else {
      console.error('Informations de connexion invalides');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="circle-user" />
        <h1>Sign In</h1>
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
    postUser: (userData) => dispatch(postUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
