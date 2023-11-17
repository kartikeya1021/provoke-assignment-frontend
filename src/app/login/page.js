import React from "react";

export default function login() {
  return (
    <div className="login-container">
      <div className="login-card">
       <label className="input-label">Username</label> <input type="text" placeholder="Username" className="custom-input"/>
        <label className="input-label">Password</label><input type="password" placeholder="Password" className="custom-input"/>
        <input type="checkbox" className="custom-checkbox"/> <label className="input-label">Remember me</label>
        <button className="custom-button">Login</button>
        <p className="custom-text">New to MyApp?<a href="./register">SignUp</a></p>
      </div>
    </div>
  );
}
