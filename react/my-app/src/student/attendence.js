import React, { Component } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";

export default class Attendence extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'studprofile'/>
                    <div className='studprofile'>
                        <div>
                            <h2>Attendence</h2> 
                            <table className="tbl">
                                <thead>
                                    <tr>
                                    <th>Course Code</th>
                                    <th>Total Class</th>
                                    <th>Class Attended</th>
                                    <th>Percentage</th>
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