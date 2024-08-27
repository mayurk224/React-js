import React, { useState } from "react";
import CommonForm from "../commonForm/CommonForm";
import { LoginFormElement } from "../../config";

const initialState = {
  email: "",
  password: "",
};
function LoginForm() {
  const [loginFormData, setLoginFormData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
    setLoginFormData(initialState);
  }

  return (
    <div>
      <h2>Login Page</h2>
      <CommonForm
        formControls={LoginFormElement}
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleSubmit={handleSubmit}
        buttonText={"Login"}
      />
    </div>
  );
}

export default LoginForm;
