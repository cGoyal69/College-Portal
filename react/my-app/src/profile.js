import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

export default class Profile extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <Navbar/>
                
            </div>
        );
    }
}