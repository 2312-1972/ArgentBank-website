import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../actions/user.action";
import {
  selectUserFirstName,
  selectUserLastname,
  selectUser,
} from "../store/selectors";

const FormEdit = () => {
  const userName = useSelector(selectUser);
  const firstName = useSelector(selectUserFirstName);
  const lastName = useSelector(selectUserLastname);
  const dispatch = useDispatch();

  const [editedUserName, setEditedUserName] = useState(userName);

  const handleSave = () => {
    console.log("Saving username:", editedUserName);
    // Dispatch l'action updateUser avec les nouvelles données
    dispatch(updateUser({ userName: editedUserName }));
    // Réinitialise le champ editedUserName si nécessaire
    setEditedUserName(userName);
  };

  const handleCancel = () => {
    // Réinitialise le champ editedUserName
    setEditedUserName(userName);
  };

  const handleUserNameChange = (e) => {
    console.log("New username:", e.target.value);
    // Met à jour l'état avec la nouvelle saisie de l'utilisateur
    setEditedUserName(e.target.value);
  };

  return (
    <div>
      <h1>Edit user info </h1>
      <form className="sign-in-content">
        <div className="input-wrapper">
          <div className="form-user">
            <label style={{ marginTop: "7px" }}>User name :</label>
            <input
              type="text"
              value={editedUserName}
              onChange={handleUserNameChange}
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
              value={firstName}
              style={{
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
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
              value={lastName}
              style={{
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #999",
                padding: "5px",
              }}
              readOnly
            />
          </div>
        </div>
        <div className="save-and-cancel">
          <button type="button" onClick={handleSave} className="save-cancel-button">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="save-cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
