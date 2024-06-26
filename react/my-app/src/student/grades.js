import React, { Component } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { studentT } from "../components/Login";

export default class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      studentInfo: [] // Initialize studentInfo in state
    };
  }

  async componentDidMount() {
    console.log(studentT); // Log studentT for debugging

    try {
      const response = await axios.post("http://localhost:6969/grade", { studentT });
      console.log(response.data); // Log entire response for debugging

      if (response.data === "Error") {
        console.log("Error fetching data from API");
        this.setState({ error: "An error occurred while fetching grades" });
      } else {
        console.log(response.data);
        this.setState({ studentInfo: response.data, isLoading: false });
      }
    } catch (error) {
      console.error("Error:", error);
      this.setState({ error: "An error occurred fetching grades" }); // More specific message
    }
  }

  render() {
    const { isLoading, error, studentInfo } = this.state;

    if (isLoading) {
      return <div>Loading grades...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="bache">
        <Header theme="headerch" />
        <div className="studentcontent">
          <Navbar name="studprofile" />
          <div className="studprofile">
            <div>
              <h2>Grades</h2>
            
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Assessment 1</th>
                    <th>Assessment 2</th>
                    <th>Assessment 3</th>
                    <th>End Sem</th>
                    <th>Final Grade</th>
                    <th>Semester</th>
                    <th>Backlog</th>
                  </tr>
                </thead>
                <tbody>
                  {studentInfo.map((grade) => (
                    <tr key={grade.roll}>
                      <td>{grade.ccode}</td>
                      <td>{grade.cname}</td>
                      <td>{grade.ass1}</td>
                      <td>{grade.ass2}</td>
                      <td>{grade.ass3}</td>
                      <td>{grade.endsem}</td>
                      <td>{grade.grade}</td>
                      <td>{grade.sem}</td>
                      <td>{grade.backlog ? 'Yes' : 'No'}</td>
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
