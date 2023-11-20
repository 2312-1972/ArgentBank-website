import React from "react";
import FormEdit from "../components/userForm/userFormEdit";
import HeaderEdit from "../components/HeaderEdit";
import AccountUser from "../components/transaction"

const EditUser = () => {
    return (
      <div >
      <main>
      <HeaderEdit isEditPage={true} />
      <FormEdit />
      <AccountUser/>
      </main>
    </div>
    );
  };
  
  export default EditUser;