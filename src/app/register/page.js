import React from "react";

export default function page() {
  return (
    <div className="register-container">
      <div className="register-card">
        <label className="input-label">Name</label>
        <input type="text" placeholder="Username" className="custom-input" />
        <label className="input-label">Email</label>
        <input
          type="Email"
          placeholder="Email"
          className="custom-input"
        />
        <label className="input-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="custom-input"
        />
        <button className="custom-button">Register</button>
        <p className="custom-text">
          Already have an account?<a href="./login">Login</a>
        </p>
      </div>
    </div>
  );
}
