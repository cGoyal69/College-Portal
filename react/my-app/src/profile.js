import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

export default class Profile extends Component {
    render()
    {
        return(
            <>
            <Header theme="headerch"/>
            <Navbar/>
            </>
        );
    }
}