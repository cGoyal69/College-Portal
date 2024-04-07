import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";


export let studentInfo = "";
export const Login = () => {
  function checkEvt(){
    var evTypep=window.performance.getEntriesByType("navigation")[0].type;
    if (evTypep === 'reload'){
        window.location.replace('/');
    }
    
  }
  checkEvt();
  //Variables for username and password and submit function
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
	function refresh (){
		window.location.reload();
	}
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user, pass);
    try{
      await axios.post("http://localhost:6969/login", {user, pass})
      .then(res => {
        console.log(res.data);
        if(res.data === "Error")
        {
          console.log("Hi");
          let c = document.getElementsByClassName('loginpage')[0];
          c.style.opacity = "0.3";
          let d = document.getElementsByClassName('error-box')[0];
          d.style.display = 'block';
        }
        else{
          studentInfo = res.data
          navigate("/student")
          toStudent();
        }
      })
    }
    catch(e)
    {
      console.log(e);
    }
  };
  //Routing to student page function

  const toStudent = (value) => {
    navigate('/student', value);
  };
  const toTeacher = (value) => {
    navigate('/teacher');
  };
  //the html elemnt to show
  return (
    <>
    <div className="loginpage">
      <Header />
      <div className='Login-Box'>
        <div className='instruction'>
          Instructions<br />
          <ol>
            <li>Please login with your username provided to you by your institution</li>
            <li>If you forget password go to admin section for password username reset</li>
            <li>In complaint avoid writing useless things as your responses are recorded for further use</li>
            <li>If site is down don't panic about anything</li>
          </ol>
        </div>
        <div className="wrapper">
          <form className="form" method='POST' onSubmit={HandleSubmit}>
            <div className="userinput">
              <label className="use" htmlFor="username">username
                <input className="user" autoComplete="off" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Username" required/>
              </label>
            </div>
            <div className="passinput">
              <label className="pas" htmlFor="password ">password
                <input id="pass" autoComplete="off" name="pass" className="pass" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" required />
              </label>
            </div>
            <button className="button" type="button" onClick={HandleSubmit}>Login</button>
          </form>
        </div>
        <button className="button" type="button" onClick={toTeacher}>Teacher</button>
      </div> 
    </div>
    <div className="error-box">
		<h2>Login Unsuccessfull</h2>
		<p>
			Please Fill your Login Credentials correctly
		</p>
		<button className="close-modal" onClick={refresh}>
			CLOSE
		</button>
    </div>
    </>
  );
};