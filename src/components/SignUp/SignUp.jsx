import React from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="form-body">
        <h2 className="form-title">Sign Up</h2>
      <form >
        <div className="form-control">
         <label htmlFor="email">Email</label>
         <input type="email" name="email" placeholder='abc@gmail.com' required />
        </div>
        <div className="form-control">
         <label htmlFor="password">Password</label>
         <input type="password" name="password" required />
        </div>
        <div className="form-control">
         <label htmlFor="confirm-password">Password</label>
         <input type="password" name="confirm-password" required />
        </div>
       <input type="submit" className="btn-submit" value="Login" />
       <div>
        <p><small>Already have an account???   <Link to="/login" className="link" >Login</Link></small> </p>
<div className="hr-style"><hr className='hr1' />Or <hr className='hr2' /></div>
</div>
      </form>
    </div>
    );
};

export default SignUp;