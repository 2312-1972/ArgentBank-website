import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectIsConnected, selectUserFirstName, selectUserLastname } from "../store/selectors";
import { useDispatch } from "react-redux";
import { signOut } from "../actions/user.action";

library.add(fas);

const HeaderEdit = () => {
  const isConnected = useSelector(selectIsConnected);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector( selectUserLastname );
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
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
            <span style={{ fontSize: "16px", color: "#00bc77"}}>
            {`${userFirstName} - ${userLastName}`}      </span>
            &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={["fas", "user-circle"]}
                style={{ fontSize: "30px", color: " #00bc77" }}
              />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="main-nav-item" onClick={handleSignOut}>
              <FontAwesomeIcon
                icon="fa-solid fa-gear"
                style={{ fontSize: "23px", color: " #00bc77", paddingBottom: "4px"}}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={["fas", "power-off"]}
                style={{ fontSize: "23px", color: " #00bc77", paddingBottom: "4px" }}
              />
            </Link>
          </>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <FontAwesomeIcon icon={["fas", "circle-user"]} />
            &nbsp; Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default HeaderEdit;
