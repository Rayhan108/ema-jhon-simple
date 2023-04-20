import React, { useContext } from "react";
import "./Login.css"
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="form-container">
        <h2 className="form-title">Login</h2>
      <form >
        <div className="form-control">
         <label htmlFor="email">Email</label>
         <input type="email" name="email"  placeholder='abc@gmail.com'  required />
        </div>
        <div className="form-control">
         <label htmlFor="password">Password</label>
         <input type="password" name="password" required />
        </div>
       <input type="submit" className="btn-submit" value="Login" />
       <div>
        <p><small>New to ema-jhon???  <Link to="/signup" className="link" >Create New Account</Link></small> </p>
       </div>
       <div className="hr-style"><hr className='hr1' />Or <hr className='hr2' /></div>
      </form>
    </div>
  );
};

export default Login;
