import React from "react";
import FormEdit from "../components/userForm/userFormEdit";
import HeaderEdit from "../components/HeaderEdit";


const EditUser = () => {
    return (
      <div >
      <main>
      <HeaderEdit isEditPage={true} />
      <FormEdit />
      </main>
    </div>
    );
  };
  
  export default EditUser;