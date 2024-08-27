import React, { useState } from "react";
import CommonForm from "../commonForm/CommonForm";
import { RegisterFormElement } from "../../config";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
};
function RegisterForm() {
  const [registerFormData, setRegisterFormData] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerFormData);
    setRegisterFormData(initialState);
  }
  return (
    <div>
      <h2>Register Form</h2>
      <CommonForm
        formControls={RegisterFormElement}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        handleSubmit={handleSubmit}
        buttonText={"Register"}
      />
    </div>
  );
}

export default RegisterForm;
