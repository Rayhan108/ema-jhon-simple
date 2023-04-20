import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
    const {createUser} =useContext(AuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
  const handleSignUp = (event) => {
    event.preventDefault();
    setError('')
    setSuccess('')
    // console.log(event);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;
    // console.log(confirmPassword);
    if(password!==confirmPassword){
setError('Password Did not match.Try again');
return;
    }else if(password.length<6){
        setError('Password must be six charecters or longer');
        return;
    }
    createUser(email,password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
        setSuccess('Account has been created successfully')
    })
    .catch(error=>{
        setError(error.message)
    })
  };
  return (
    <div className="form-body">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Password</label>
          <input type="password" name="confirmpassword" required />
        </div>
        <input type="submit" className="btn-submit" value="Sign Up" />
        <div>
          <p>
            <small>
              Already have an account???{" "}
              <Link to="/login" className="link">
                Login
              </Link>
            </small>{" "}
          </p>
          <p className="error">{error}</p>
          <p className="success">{success}</p>
          <div className="hr-style">
            <hr className="hr1" />
            Or <hr className="hr2" />
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default SignUp;
