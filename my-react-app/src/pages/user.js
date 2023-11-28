// User.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/user.action";
import { Link } from "react-router-dom";
import AccountSection from "../components/AccountSection";

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
              {user ? `${user.firstName} ${user.userName}` : "User"}!
            </h1>
            <Link to="/editUser">
              <button className="edit-button">Edit Name</button>
            </Link>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <AccountSection
            title="Argent Bank Checking"
            accountNumber="x8349"
            amount="$2,082.79"
            description="Available Balance"
          />
          <AccountSection
            title="Argent Bank Savings"
            accountNumber="x6712"
            amount="$10,928.42"
            description="Available Balance"
          />
          <AccountSection
            title="Argent Bank Credit Card"
            accountNumber="x8349"
            amount="$184.30"
            description="Current Balance"
          />
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
