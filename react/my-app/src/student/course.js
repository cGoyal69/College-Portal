import React, { Component } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { studentToken } from "../components/Login";
import axios from "axios";


export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      studentInfo: [] // Initialize studentInfo in state
    };
  }

  async componentDidMount() {
    console.log(studentToken); // Log studentT for debugging

    try {
      const response = await axios.post("http://localhost:6969/courses", { studentToken });
      console.log(response.data); // Log entire response for debugging

      if (response.data === "Error") {
        console.log("Error fetching data from API");
        this.setState({ error: "An error occurred while fetching courses" });
      } else {
        console.log(response.data);
        this.setState({ studentInfo: response.data, isLoading: false });
      }
    } catch (error) {
      console.error("Error:", error);
      this.setState({ error: "An error occurred fetching courses" }); // More specific message
    }
  }
    render()
    {
      const { isLoading, error, studentInfo } = this.state;

    if (isLoading) {
      return <div>Loading Courses...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
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
                                    <th>Semester</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {studentInfo.map((courses) => (
                                  <tr key={courses.dept_id}>
                                    <td>{courses.ccode}</td>
                                    <td>{courses.cname}</td>
                                    <td>{courses.credit}</td>
                                    <td>{courses.faculty}</td>
                                    <td>{courses.sem}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}