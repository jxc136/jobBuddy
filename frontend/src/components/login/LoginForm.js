import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = (login) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const user = { email, password };

    const response = await fetch("/users/login", {
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
      setEmail("");
      setPassword("");
      console.log("User logged in", json);
      window.localStorage.setItem("token", json.token);
      window.localStorage.setItem("user_id", json.user_id);
      console.log(json);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h3>Log in</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        {error && <div className="error">{error}</div>}
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default Login;
