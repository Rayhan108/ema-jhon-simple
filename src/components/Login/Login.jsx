import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState(false);
  const { user, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";
  // console.log(user);
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    // console.log(event);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        setSuccess(" Login successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text":"password"} name="password" required />
          <p onClick={() => setShow(!show)}>
            <span>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </span>
          </p>
        </div>
        <input type="submit" className="btn-submit" value="Login" />
        <div>
          <p>
            <small>
              New to ema-jhon???{" "}
              <Link to="/signup" className="link">
                Create New Account
              </Link>
            </small>{" "}
          </p>
          <p className="error">{error}</p>
          <p className="success">{success}</p>
        </div>
        <div className="hr-style">
          <hr className="hr1" />
          Or <hr className="hr2" />
        </div>
      </form>
    </div>
  );
};

export default Login;
