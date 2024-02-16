import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar' style={{
      display:"flex",
      justifyContent:"space-around",
      width:"95vw",
      boxShadow:" 2px",
      
      
       

    }} >
      <Link to={"/Home"}>
        <img src="https://yt3.googleusercontent.com/V284HyHaLxisGi-7Ew7E2hdaLwwWLp47oDaF_SAKHXYCMkusoCWGTLOFOcmEnLGAHhv1j9WNPQ=s900-c-k-c0x00ffffff-no-rj" width={"50px"} alt="" /></Link>
      <div className="main" style={{
      display:"flex",
      justifyContent:"space-around",
      width:"70vw",

      

    }}>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <h3>Home</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"about"}>
          <h3>About</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"Contact"}>
          <h3>Contact</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"Signup"}>
          <h3>Signup</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"Login"}>
          <h3>Login</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"TrainForm"}>
          <h3>TrainForm</h3></Link>

      </div>
    </div>
  )
}

export default Navbar
