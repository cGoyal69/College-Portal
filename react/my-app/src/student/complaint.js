import React, { Component } from "react";
import { DropdownMenu } from "../components/dropdown";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";

export default class Complaint extends Component {
    render()
    {
        return(
            <div className='studentpage'>
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'instructionstudent' />
                    <div className='instructionstudent'>
                        <DropdownMenu/>
                        <br/>
                        <br/>
                        <form>
                            <textarea id="objective" name="objective" rows="5" cols="50" placeholder="Please Elaborate your complaint here"></textarea>
                        </form>
                    </div>
                </div>          
            </div>
        );
    }
}
  
