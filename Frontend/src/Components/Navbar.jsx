import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import logo from "./trainlogo.png"
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
      document.cookie = 'User=; expires=Thu, 01 Jan 1978 00:00:00 UTC; path=/;';
    } 
  };

  return (
    <div className='navbar' style={{
      display: "flex",
      justifyContent: "space-around",
      width: "100vw",
      boxShadow: "2px",
    }}>
      <Link to={"/Home"}>
        <img src={logo} width={"50px"} alt="" />
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
        <div
        style={{
          display : login ? "none" : "block",
        }}>  <Link style={{ textDecoration: "none", color: "black" }} to={"Signup"}>
        <h3>Signup</h3>
      </Link>          </div>
        
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
