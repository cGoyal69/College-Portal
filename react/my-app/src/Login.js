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
    <div className="wrapper">
      <form action='' onSubmit={HandleSubmit}>
        
        <div className="userinput">
          <label htmlFor="username">username</label>
          <input value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Username" required/><FaUser className="icon" />  
        </div>
        <div className="passinput">
          <label htmlFor="password ">password</label>
          <input value={pass} onChange={(e)=>setPass(e.target.value)} type="text" placeholder="password" required/><FaLock className="icon"/>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}