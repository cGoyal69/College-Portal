import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  //Variables for username and password and submit function
  const[user,setUser] = useState('');
  const[pass,setPass] = useState('');
  const HandleSubmit= (e) =>{
      e.preventDefault();
      console.log(user)
  };
  const navigate = useNavigate();
  const toStudent = () => {
      navigate('/student');
  };
  //the html elemnt to show
  return (
    <div className="loginpage">
      <div className='Login-Box'>
        <div className='instruction'>
          Instructions<br/> 
          <ol>
            <li>Please login with your username provided to you by your institution</li>
            <li>If you forget password go to admin section for password username reset</li>
            <li>In complaint avoid writing useless things as your responses are recorded for further use</li>
            <li>If site is down don't panic about anything</li>
          </ol>
        </div>
        <div className="wrapper">
          <form className="form" action='' onSubmit={HandleSubmit}>
            <div className="userinput">
              <label className="use" htmlFor="username">username</label>
              
              <input className="user" value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Username" required/>
            </div>
            <div className="passinput">
              <label className="pas" htmlFor="password ">password</label>
              <input className="pass" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password" required/>
            </div>
            <button className="button" type="button">Login</button>
          </form>
        </div>
        <button className="button" type="button" onClick={toStudent}>Student</button>
      </div>
    </div>
  );
}