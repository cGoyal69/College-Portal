import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

export default class Course extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'studprofile'/>
                    <div className='studprofile'>
                        <div>
                            <h2>Course Registered</h2> 
                            <table className="tbl">
                                <thead>
                                    <tr>
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Credits</th>
                                    <th>Course Faculty</th>
                                    <th>Academic Session</th>
                                    <th>Term</th>
                                    </tr>
                                </thead>
                            </table>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}