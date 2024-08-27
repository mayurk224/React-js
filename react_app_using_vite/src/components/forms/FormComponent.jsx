import React, { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleInputChange(e) {
    // console.log(e);
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  console.log(formData);
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          onChange={handleOnChange}
          // onChange={(e) =>
          //   setFormData({
          //     ...formData,
          //     [e.target.name]: e.targe.value,
          //   })
          // }
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
