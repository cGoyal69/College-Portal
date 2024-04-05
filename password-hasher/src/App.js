import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {
    function refresh (){
		window.location.reload();
	}
    let password = "";
    const [pass, setPass] = useState('');
    const HandleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user, pass);
        try{
          await axios.post("http://localhost:1/", {pass})
          .then(res => {

                console.log("Hi");
                let c = document.getElementsByClassName('loginpage')[0];
                c.style.opacity = "0.3";
                let d = document.getElementsByClassName('error-box')[0];
                d.style.display = 'block';
                password = res.data;
          })
        }
        catch(e)
        {
          console.log(e);
        }
      };
    return (
            <>
            <h1>
                Password - Bcrpyter
            </h1>
            <h3>
                program conveets your password into a hashed password using bcrypt library of node
            </h3>
            <form className="form" method='POST' onSubmit={HandleSubmit}>
            <div className="passinput">
                <label className="pas" htmlFor="password ">password
                <input id="pass" autoComplete="off" name="pass" className="pass" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" required />
                </label>
            </div>
            <button className="button" type="button" onClick={HandleSubmit}>Login</button>
            </form>
            <div className="error-box">
		<h2>Password Hashed</h2>
		<p>
			Hashed Password:{password}
		</p>
		<button className="close-modal" onClick={refresh}>
			CLOSE
		</button>
    </div>
            </>
        );
}

export default App;
