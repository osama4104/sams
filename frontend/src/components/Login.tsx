import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>(""); //useState is used to change the initial state as per needed,here email is the initialState and setEmail is for updating the state.
  const [password, setPassword] = useState<string>("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email:${email},Password:${password}`);
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="card-header">
          {}
          <h2>Login form</h2>
        </div>
        {}
        <form className="Login-Form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or Phone"
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
            ></input>
          </div>
          <div className="links">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login Button">
            Login
          </button>
          <p className="SignUp">
            Not a member?<Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
