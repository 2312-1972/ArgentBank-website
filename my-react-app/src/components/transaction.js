import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";
// import {
//   selectIsConnected,
//   selectUserFirstName,
//   selectUserLastname,
// } from "../store/selectors";

library.add(fas);
const AccountUser = () => {
  return (
    <div>
      <section className="account-transaction">
        <div className="account-content-wrapper">
          <h3 className="account-title-user">Argent Bank Checking (x3448)</h3>
          <p className="account-white">$48,098.43</p>
          <p className="account-white-descritption">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/checkTransac">
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              style={{ color: "white", fontSize: "50px" }}
            />
          </Link>
        </div>
      </section>
      <section className="account-transaction">
        <div className="account-content-wrapper">
          <h3 className="account-title-user">Argent Bank Checking (x3448)</h3>
          <p className="account-white">$48,098.43</p>
          <p className="account-white-descritption">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/checkTransac">
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              style={{ color: "white", fontSize: "50px" }}
            />
          </Link>
        </div>
      </section>
      <section className="account-transaction">
        <div className="account-content-wrapper">
          <h3 className="account-title-user">Argent Bank Checking (x3448)</h3>
          <p className="account-white">$48,098.43</p>
          <p className="account-white-descritption">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/checkTransac">
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              style={{ color: "white", fontSize: "50px" }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AccountUser;