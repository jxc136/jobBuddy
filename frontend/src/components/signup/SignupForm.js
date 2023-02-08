import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Signup = (signup) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const user = { firstname, lastname, email, password };

    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setError(null);
      console.log("new User added", json);
    }
  };

  return (
      
    <><div className="hero">
    <div className="hero__container">
      <p className='subheader'>The smart way to job hunt</p>
      <p className='oneliner'>Streamline your job hunt and land your next < br />
        career move with jobBuddy< br />
        
        </p>
    </div>
    </div>
    <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname} />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Log in here </a>
        </p>
      </form></>
     
  ) 
}

export default Signup;
