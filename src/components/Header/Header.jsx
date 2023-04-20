import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
    .then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && 
          <span className="text-white">
            {user.email}
          <span className="btn-logout">

            <button onClick={handleLogOut}>LogOut</button>
          </span>
          </span>
        }
      </div>
    </nav>
  );
};

export default Header;
