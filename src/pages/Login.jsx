import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Login() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const gitHub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left ">
          <div className="loginButton google" onClick={()=>google()}><span> <FaGooglePlusG size={25}/>  </span>Google</div>
          <div className="loginButton faceBook"><span><FaFacebookF size={25} /> </span>Facebook</div>
          <div className="loginButton gitHub" onClick={()=>gitHub()}><span> <FaGithub size={25}/> </span> GitHub</div>
        </div>
        <div className="cneter">
          <div className="line"/>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" name="Username"  className="input" placeholder="Please Enter Username"/>
          <input type="text" name="Password" className="input" placeholder="Please Enetr Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
