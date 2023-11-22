// User.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/user.action";
import { Link } from "react-router-dom";

const User = ({ isAuthenticated, user, getUser }) => {
  useEffect(() => {
    if (isAuthenticated) {
      getUser();
    }
  }, [getUser, isAuthenticated]);

  return (
    <main className="main bg-dark">
      {isAuthenticated ? (
        <div>
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user ? `${user.firstName} ${user.lastName}` : "User"}!
            </h1>
            <Link to="/editUser">
              <button className="edit-button">Edit Name</button>
            </Link>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <Link to="/checkTransac" style={{ textDecoration: "none" }}>
                {" "}
                <button className="transaction-button">
                  View transactions
                </button>{" "}
              </Link>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <Link to="/checkTransac" style={{ textDecoration: "none" }}>
                {" "}
                <button className="transaction-button">
                  View transactions
                </button>{" "}
              </Link>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <Link to="/checkTransac" style={{ textDecoration: "none" }}>
                {" "}
                <button className="transaction-button">
                  View transactions
                </button>{" "}
              </Link>
            </div>
          </section>
        </div>
      ) : (
        <p>Please sign in to view this page.</p>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
