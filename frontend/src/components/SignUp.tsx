import React, { useState } from "react";
import Login from "./Login";
const SignUp: React.FC = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password != confirmpassword) {
      alert("Password do not match.");
      return;
    }
    alert(`Signed Up Successfully.`);
  };
  return (
    <div className="SignUp-wrapper">
      <div className="SignUp-card">
        <div className="cardHeader">SignUp</div>
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="input-group">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="confirmPassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            SignUp
          </button>
          <p className="signup-text">
            Already have an account ? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
