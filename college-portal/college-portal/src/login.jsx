import { useState } from "react";
import axios from "axios";

export const Login = () => {
  //Variables for username and password and submit function
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');


  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pass);
    const response = await axios.post("http://localhost:6969/",{user,pass})
    if(response.status === 200)
    {
      console.log(response.message);
    }
  };
  //Routing to student page function

  //the html elemnt to show
  return (
    <div className="loginpage">
      <div className='Login-Box'>
        <div className='instruction'>
          Instructions<br />
          <ol>
            <li>Please login with your username provided to you by your institution</li>
            <li>If you forget password go to admin section for password username reset</li>
            <li>In complaint avoid writing useless things as your responses are recorded for further use</li>
            <li>If site is down panic about anything</li>
          </ol>
        </div>
        <div className="wrapper">
          <form className="form" action='' onSubmit={HandleSubmit}>
            <div className="userinput">
              <label className="use" htmlFor="username">username</label>
              <input
                className="user"
                autoComplete="off"
                id="user"
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="passinput">
              <label className="pas" htmlFor="password ">password</label>
              <input id="pass" 
              autoComplete="off" 
              name="pass" 
              className="pass" 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="password" 
              required />
            </div>
            <button className="button" type="button" onClick={HandleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}