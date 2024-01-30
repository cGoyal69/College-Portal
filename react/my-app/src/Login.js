import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export const Login = (props) => {
  const[user,setUser] = useState('');
  const[pass,setPass] = useState('');
  
  const HandleSubmit= (e) =>{
      e.preventDefault();
      console.log(user)
  }
  return (
    <div className='Login-Box'>
      <div className='instruction'>
        Instructions<br/> 
        <ol>
          <li>Please login with your username Provided to you by your institution</li>
          <li>Please login with your username Provided to you by your institution</li>
          <li>Please login with your username Provided to you by your institution</li>
          <li>Please login with your username Provided to you by your institution</li>
        </ol>
      </div>
      <div className="wrapper">
        <form className="form" action='' onSubmit={HandleSubmit}>
          <div className="userinput">
            <label className="use" htmlFor="username">username</label>
            <input className="user" value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Username" required/><FaUser className="icon" />  
          </div>
          <div className="passinput">
            <label className="pas" htmlFor="password ">password</label>
            <input className="pass" value={pass} onChange={(e)=>setPass(e.target.value)} type="text" placeholder="password" required/><FaLock className="icon"/>
          </div>
          <button className="button-74" role="button">Login</button>
          
        </form>
      </div>
    </div>
  )
}