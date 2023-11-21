import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const CollapseTransac = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <section
        className={`account-transaction ${isCollapsed ? "collapsed" : ""}`}
        style={{
          background: "#00bc77",
          padding: "1rem",
          marginBottom: isCollapsed ? "0" : "1rem",
        }}
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
            <h3 className="account-title-user" style={{ paddingLeft: "25px" }}>
              $298.00{" "}
            </h3>
          </div>
        </div>
        <div
          className="account-content-wrapper cta"
          onClick={handleToggleCollapse}
        >
          <FontAwesomeIcon
            icon={isCollapsed ? "chevron-up" : "chevron-down"}
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </section>

      {isCollapsed && (
        <div
          className="account-transaction"
          style={{ background: "#00bc77", padding: "1rem" }}
        >
          {/* on ajoute  ici les  les informations */}
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div>
              <h3 className="account-title-user">Transaction type </h3>
            </div>
            <div>
              <h3
                className="account-title-user"
                style={{ marginLeft: "150px" }}
              >
                Electronic
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapseTransac;
