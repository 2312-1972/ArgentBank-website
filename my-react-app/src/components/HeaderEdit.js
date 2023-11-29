import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectIsConnected, selectUser } from "../store/selectors";
import { useDispatch } from "react-redux";
import { signOut } from "../actions/user.action";

library.add(fas);

const HeaderEdit = () => {
  const isConnected = useSelector(selectIsConnected);
  const userUserName = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <nav className="main-nav header-350" style={{ display: "flex" }}>
      <div style={{ display: "flex", gap: "5px" }}>
        <FontAwesomeIcon
          icon="fa-solid fa-vault"
          style={{
            fontSize: "30px",
            color: " #00bc77",
            paddingBottom: "4px",
            marginTop: "20px",
          }}
        />
        <h1
          style={{
            fontSize: "20px",
            color: " #00bc77",
            marginTop: "20px",
          }}
        >
          Argent Bank
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isConnected ? (
          <>
            <span
              style={{
                fontSize: "16px",
                color: "#00bc77",
                textDecoration: "none",
                paddingTop: "5px",
              }}
            >
              {userUserName}
            </span>
            &nbsp;&nbsp;
            <Link to="/user" className="main-nav-item">
              <FontAwesomeIcon
                icon={["fas", "user-circle"]}
                style={{
                  fontSize: "30px",
                  color: " #00bc77",
                  paddingBottom: "8px",
                }}
              />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              icon="fa-solid fa-gear"
              style={{
                fontSize: "23px",
                color: " #00bc77",
                paddingBottom: "8px",
              }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="main-nav-item" onClick={handleSignOut}>
              <FontAwesomeIcon
                icon={["fas", "power-off"]}
                style={{
                  fontSize: "23px",
                  color: " #00bc77",
                  paddingBottom: "8px",
                }}
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
