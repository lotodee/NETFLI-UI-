import React from 'react'
import "./login.scss"
import {Link} from "react-router-dom"
const Register = () => {


  return (
 <div className="login">
    <div className="top">
        <div className="wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" />
       
        </div>
    </div>
    <div className="container">
       <form action="">
        <h1>Sign In</h1>
        <input type="emaill" placeholder='Email or phone number' />
        <input type="password" placeholder='Password' />
        <button className="loginButton">Sign In</button>
        <div className="options">
          <div className="remember">
          
            <input type="checkbox" id="remember-me"  checked/>
            <label for="remember-me">remember me</label>
          </div>
        
          <p>Need help?</p>
        </div>
        <div className="below">
          <Link to="/register" className='link'>
        <span>New to Netfilix? <b>Sign up now</b></span>
        </Link>
        <br/>
        <br/>
        <small>
            This page is protected by Google reCAPTCH to ensure you are not a bot.
            <b> Learn more</b>
        </small>
        </div>
       </form>
        
    </div> 
 </div>
  )
}

export default Register