import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useRef } from 'react'
import "./register.scss"
const Register = () => {
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")

const emailRef = useRef()
const passwordRef = useRef()

const handleStart = () =>{
    setEmail(emailRef.current.value)
}

const handleFinish = () =>{
    setPassword(passwordRef.current.value)
}
  return (
 <div className="register">
    <div className="top">
        <div className="wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" />
        <button className="loginButton">Sign In</button>
        </div>
    </div>
    <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancle anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>

        {!email ? (
    <div className="input">
            <input type="email" placeholder='Email address' ref={emailRef} />
         
            <button className="registrationButton" onClick={ handleStart}><span>Get Started</span><ArrowForwardIosIcon className="registrationIcon" /></button>
        </div>
   
        ):(
        <form className="input">
            <input type="password" placeholder='password' ref={passwordRef} />
            <button className="registrationButton" onClick={ handleFinish}>Start Membership</button>
            <button className="registrationButton" onClick={ handleStart}><span>Get Started</span><ArrowForwardIosIcon className="registrationIcon" /></button>
        </form> 
        )}
    </div>
 </div>
  )
}

export default Register