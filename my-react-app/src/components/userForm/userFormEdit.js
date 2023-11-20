// FormEdit.js
import React from "react";

const FormEdit = ({ userName }) => {
  return (
    <div>
      <h1>Edit user info </h1>
      <form className="sign-in-content">
        <div className="input-wrapper">
          <div className="form-user">
            <label style={{ marginTop: "7px" }}>User name :</label>
            <input
              type="text"
              value={userName}
              style={{
                borderRadius: "5px",
                backgroundColor: "#ffffff",
                border: "1px solid #999",
                padding: "5px",
              }}
              
            />
          </div>
          <div className="form-user">
            <label style={{ marginTop: "7px" }}>First name :</label>
            <input
              type="text"
              value={userName}
              style={{
                borderRadius: "5px",
                backgroundColor: '#f2f2f2',
                border: "1px solid #999",
                padding: "5px",
              }}
              readOnly 
            />
          </div>
          <div className="form-user">
            <label style={{ marginTop: "7px" }}>Last name :</label>
            <input
              type="text"
              value={userName}
              style={{
                borderRadius: "5px",
                backgroundColor: '#f2f2f2',
                border: "1px solid #999",
                padding: "5px",
              }}
              readOnly 
            />
          </div>
        </div>
        <div className="save-and-cancel">
          <button type="submit" className="save-cancel-button">
            Save
          </button>
          <button type="submit" className="save-cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
