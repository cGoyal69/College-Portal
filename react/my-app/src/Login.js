import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";

export const Login = (props) => {
  const history = useNavigate(); // Use the same instance for navigation

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:2004/", {
        user,
        pass,
      });

      if (response.data === "exist") {
        history("/student");
      } else if (response.data === "notexist") {
        alert("Please enter a valid username provided by the institution");
      } else {
        // Handle other potential responses
        console.error("Unexpected response from server:", response.data);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to log in. Please try again."); // User-friendly error message
    }
  };
  //Routing to student page function
  const navigate = useNavigate();
  const toStudent = (value) => {
      navigate('/student');
  };
  const toTeacher = (value) => {
    navigate('/teacher');
};
  //the html elemnt to show
  return (
    <div className="loginpage">
      <Header/>
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
          <form className="form" method="POST" onSubmit={HandleSubmit}>
            <div className="userinput">
              <label className="use" htmlFor="username">username</label>
              <input 
                className="user" 
                id="user" 
                name="user" 
                value={user} 
                onChange={(e)=>setUser(e.target.value)} 
                type="text" 
                placeholder="Username" 
                required
              />
            </div>
            <div className="passinput">
              <label className="pas" htmlFor="password ">password</label>
              <input id="pass" name="pass" className="pass" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password" required/>
            </div>
            <button className="button" type="button" onClick={HandleSubmit}>Login</button>
          </form>
        </div>
        <button className="button" type="button" onClick={toStudent}>Student</button>
        <button className="button" type="button" onClick={toTeacher}>Teacher</button>
      </div>
    </div>
  );
}