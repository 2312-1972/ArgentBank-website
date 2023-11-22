// AccountSection.js
import React from "react";
import { Link } from "react-router-dom";

const AccountSection = ({ title, accountNumber, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title} ({accountNumber})</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/checkTransac" style={{ textDecoration: "none" }}>
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  );
};

export default AccountSection;
