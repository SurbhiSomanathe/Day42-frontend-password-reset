import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [name, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();
    var datatwo = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-backendapp.herokuapp.com/api/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: datatwo,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/welcome");
      })
      .catch(function (error) {
        console.log(error);
      });

    
  };
  return (
    <form onSubmit={postData}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
};

export default SignUp;
