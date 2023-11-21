import React from "react";
import HeaderEdit from "../components/HeaderEdit";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CollapseTransac from "../components/CollapseTransac"
library.add(fas);

const CheckTransaction = () => {
  return (
    <div>
      <HeaderEdit isEditPage={true} />
      <section className="account-transaction" style={{marginTop:'40px'}}>
        <div className="account-content-wrapper">
          <h3 className="account-title-user">Argent Bank Checking (x3448)</h3>
          <p className="account-white">$48,098.43</p>
          <p className="account-white-descritption">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/editUser">
            <FontAwesomeIcon
              icon="fa-solid fa-xmark" 
              style={{ color: "white", fontSize: "50px" }}
            />
          </Link>
        </div>
      </section>
      
      <section
        className="account-transaction"
        style={{ background: "#ffffff", padding:'0.5rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "220px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user" style={{color:'black', paddingLeft:'10px'}}>Date </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{color:'black',paddingLeft:'10px'}}>Description</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{color:'black',paddingLeft:'25px'}}>Amount</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{color:'black'}}>Balance</h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>
      <CollapseTransac/> 
      {/* <section
        className="account-transaction"
        style={{ background: "#00bc77", padding:'1rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "200px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user">27/02/20 </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">Golden Sun Bakery</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">$8.00</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{paddingLeft:'25px'}} >$298.00 </h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>
      <section
        className="account-transaction"
        style={{ background: "#00bc77", padding:'1rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "200px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user">27/02/20 </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">Golden Sun Bakery</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">$8.00</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{paddingLeft:'25px'}}>$298.00 </h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>
      <section
        className="account-transaction"
        style={{ background: "#00bc77", padding:'1rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "200px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user">27/02/20 </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">Golden Sun Bakery</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">$8.00</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{paddingLeft:'25px'}}>$298.00 </h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>
      <section
        className="account-transaction"
        style={{ background: "#00bc77", padding:'1rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "200px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user">27/02/20 </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">Golden Sun Bakery</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">$8.00</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{paddingLeft:'25px'}}>$298.00 </h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>
      <section
        className="account-transaction"
        style={{ background: "#00bc77", padding:'1rem' }}
      >
        <div
          className="account-content-wrapper"
          style={{ display: "flex", gap: "200px" }}
        >
          <div>
            {" "}
            <h3 className="account-title-user">27/02/20 </h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">Golden Sun Bakery</h3>{" "}
          </div>
          <div>
            {" "}
            <h3 className="account-title-user">$8.00</h3>
          </div>
          <div>
            {" "}
            <h3 className="account-title-user" style={{paddingLeft:'25px'}}>$298.00 </h3>
          </div>
        </div>
        <div className="account-content-wrapper cta">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section> */}
    </div>
  );
};

export default CheckTransaction;
