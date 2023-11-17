import React from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectIsConnected, selectUserFirstName } from '../store/selectors';


library.add(fas);


const Header = () => {
  const isConnected = useSelector(selectIsConnected);
  const userFirstName = useSelector(selectUserFirstName);

  const handleSignOut = () => {
    // Ajoutez ici la logique de déconnexion (dispatch d'une action, suppression du token, etc.)
    // Assurez-vous que le state Redux est mis à jour après la déconnexion
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected ? (
          <>
            <Link to="/user" className="main-nav-item">
              <FontAwesomeIcon icon={['fas', 'user-circle']} />
              {userFirstName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleSignOut}>
              <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <FontAwesomeIcon icon={['fas', 'circle-user']} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
