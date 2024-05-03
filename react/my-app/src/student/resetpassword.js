import { useState } from "react";
import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import axios from "axios";
import { studentInfo } from "../components/Login";


export  const Reset =() => {

            const [pass, setPass] = useState('');
            const [confirmpass, setconfirmPass] = useState('');
            function refresh (){
                window.location.replace('/');
            }
            
            function refresh1 (){
                window.location.replace('/student');
            }
            const HandleSubmit = async (e) => {
                e.preventDefault();
                try{
                    await axios.post("http://localhost:6969/reset-password", {tok: studentInfo.token ,password: pass})
                    .then(res => {
                    if(res.data === "Error")
                    {
                        console.log("Hi");
                        let c = document.getElementsByClassName('bache')[0];
                        c.style.opacity = "0.3";
                        let d = document.getElementsByClassName('error-box')[0];
                        d.style.display = 'block';
                    }
                    else{
                        console.log("Hi");
                        let c = document.getElementsByClassName('bache')[0];
                        c.style.opacity = "0.3";
                        let d = document.getElementsByClassName('success-box')[0];
                        d.style.display = 'block';
                    }
                    })
                }
                catch(e)
                {
                    console.log(e);
                }
                };
            function CompareFields(f1, f2, caseinsensitive)
                {
                var val1 = document.getElementById(f1).value;
                var val2 = document.getElementById(f2).value;
                if( caseinsensitive )
                {
                    val1 = val1.toUpperCase();
                    val2 = val2.toUpperCase();
                }
                val1 = val1.replace(/^\s*/,"");
                val1 = val1.replace(/\s*$/,"");
                if( val1.length === 0 ) { return; }
                val2 = val2.replace(/^\s*/,"");
                val2 = val2.replace(/\s*$/,"");
                if( val2.length === 0 ) { return; }
                if( val1 === val2 ) { return; }
                alert("The form fields need to be identical.");
                }
            return(
                <>
                <div className="bache">
                    <Header theme="headerch"/>
                    <div className='studentcontent'>
                        <Navbar name = 'studprofile'/>
                        <div className='studprofile'>
                            <div className="reset">
                                <h2>Reset password</h2>
                                <form action="" method="post" onSubmit={HandleSubmit}>
                                    <label className="reset-query">Password
                                    <input
                                    type="password"
                                    name="password"
                                    id="passw"
                                    placeholder="password"
                                    value={pass}
                                    required
                                    onChange={(e) => setPass(e.target.value)} className="reset-input"
                                    /></label>
                                    <br />
                                    <label className="reset-query">Comfirm-Password
                                    <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="confirm-password"
                                    value={confirmpass}
                                    required
                                    onChange={(e) => setconfirmPass(e.target.value)} className="reset-input"
                                    /></label>
                                    <br />
                                    <input type="submit" value="submit" className="reset-submit"/>
                                </form>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="error-box">
                <h2>Password Reset Unsuccessfull</h2>
                <p>
                    Please Try Again Later
                </p>
                <button className="close-modal" onClick={refresh1}>
                    CLOSE
                </button>
                </div>
                <div className="success-box">
                <h2>Password Successfully Updated</h2>
                <p>
                    Please Click to Login again using updated password
                </p>
                <button className="close-modal" onClick={refresh}>
                    CLOSE
                </button>
                </div>
                </>
            )
        }