import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

export default class Grades extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'studprofile'/>
                    <div className='studprofile'>
                        <div>
                            <h2>Grades</h2> 
                            <table className="tbl">
                                <thead>
                                    <tr >
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Assesment 1</th>
                                    <th>Assesment 2</th>
                                    <th>Assesment 3</th>
                                    <th>End Sem</th>
                                    <th>Final Grade</th>
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
