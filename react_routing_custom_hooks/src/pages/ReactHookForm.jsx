import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Corrected 'error' to 'errors'
    reset,
  } = useForm();

  function onSubmitForm(data) {
    console.log(data);
    reset();
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
          />
          {errors?.email && errors.email.type === "required" ? (
            <p>This field is required</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            id="password"
          />
          {errors?.password && errors.password.type === "required" ? (
            <p>This field is required</p>
          ) : null}
          {errors?.password && errors.password.type === "minLength" ? (
            <p>Password must be at least 8 characters long</p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
