import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

export default class Profile extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'studprofile'/>
                    <div className='studprofile'>
                        <h2>General Infromation</h2> 
                        <ol>
                        <li>Hello This is Chirag Goyal and we are here to fuck you</li>
                        <li>If you forget password go to admin section for password username reset</li>
                        <li>In complaint avoid writing useless things as your responses are recorded for further use</li>
                        <li>If site is down don't panic about anything</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}