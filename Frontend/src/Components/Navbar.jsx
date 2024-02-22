import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { AppContext } from './ParentContext';

const Navbar = () => {
  // const [login, setlogin] = useState(false);
  const {login, setlogin} = useContext(AppContext)
  const navigate = useNavigate();


  const handleLogin = () => {
    if (login) {
      // Log out
      localStorage.setItem("isLoggedIn", "false");
      setlogin(false);
      navigate("/login");
      alert("Your Logging Out")
    } 
  };

  return (
    <div className='navbar' style={{
      display: "flex",
      justifyContent: "space-around",
      width: "95vw",
      boxShadow: "2px",
    }}>
      <Link to={"/Home"}>
        <img src="https://yt3.googleusercontent.com/V284HyHaLxisGi-7Ew7E2hdaLwwWLp47oDaF_SAKHXYCMkusoCWGTLOFOcmEnLGAHhv1j9WNPQ=s900-c-k-c0x00ffffff-no-rj" width={"50px"} alt="" />
      </Link>
      <div className="main" style={{
        display: "flex",
        justifyContent: "space-around",
        width: "70vw",
      }}>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <h3>Home</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"about"}>
          <h3>About</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"Contact"}>
          <h3>Contact</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"Signup"}>
          <h3>Signup</h3>
        </Link>
        <button style={{ border: "none", color: "black" , backgroundColor:"#F0FFFF", cursor:"pointer" }} onClick={()=>{
          handleLogin();if(!login){
            navigate("Login")
          }
        }}>
          <h3>{login ? "Log Out" : "Log In"}</h3>
        </button>
        <Link style={{ textDecoration: "none", color: "black" }} to={"TrainForm"}>
          <h3>TrainForm</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
