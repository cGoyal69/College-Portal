import React, { Component } from "react";
import { DropdownMenu } from "./dropdown";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

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
                            <textarea id="objective" name="objective" rows="5" cols="50">Please Elaborate </textarea>
                        </form>
                    </div>
                </div>          
            </div>
        );
    }
}
        