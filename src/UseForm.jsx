import React from "react";
import {useForm} from "./customHook/custom";
import { Link } from "react-router-dom";

export default function UseForm() {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values: ", values);
    resetForm();
  };

  return (

    <>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label id="username">username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label id="email">email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Kirim</button>
    </form>

    <div>
        <Link to="/">Home</Link>
      </div>
    </>

    
  );
}
