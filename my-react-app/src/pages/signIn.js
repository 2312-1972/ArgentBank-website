// SignIn.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // On effectuez ici les opérations de connexion ou toute autre logique nécessaire
    // Une fois connecté, on navigue vers la page User
    navigate('/user');
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="circle-user" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a onClick={handleSignIn} className="sign-in-button">
            Sign In
          </a>
          </form>
      </section>
    </main>
  );
};

export default SignIn;
