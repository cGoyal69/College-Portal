import React, { Component } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { studentToken } from "../components/Login";

let studentInfo = "";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          error: null,
        };
      }
      
      async componentDidMount() {
        console.log(studentToken)
        await axios
          .post("http://localhost:6969/user-details", {studentToken} )
          .then((res) => {
            if (res.data === "Error") {
              console.log("Error fetching data");
              this.setState({ error: "An error occurred while fetching data" });
            } else {
              studentInfo = res.data[0];
              this.setState({ isLoading: false });
            }
          })
          .catch((e) => {
            console.error("Error:", e);
            this.setState({ error: "An error occurred" });
          });
      }

    render()
    {
        const { isLoading, error } = this.state;
        const genprofiledata = [
            {
                value: 'Name',
                readonly: true,
                cName: 'bo nameform',
                type: 'text',
                answer: studentInfo.Name
            },
            {
                value: 'Registration Number',
                readonly: true,
                cName: 'bo rollform',
                type: 'number',
                answer: studentInfo.roll
            },
            {
                value: 'Branch',
                readonly: true,
                cName: 'bo branchform',
                type: 'text',
                answer: studentInfo.dept_id
            },
            {
                value: 'Year of Graduation',
                readonly: true,
                cName: 'bo nameform',
                type: 'text', 
                answer: studentInfo.grad_year
            },
            {
                value: 'Contact Number',
                readonly: true,
                cName: 'bo contactform',
                type: 'number',
                answer: studentInfo['Contact']
            },
            {
                value: 'Hostel',
                readonly: true,
                cName: 'bo hostelorm',
                type: 'text', 
                answer: studentInfo['Hostel']
            },
            {
                value: 'Room Number',
                readonly: true,
                cName: 'bo roomform',
                type: 'number', 
                answer: studentInfo['Room Number']
            },
        ]
        
        const addressprofiledata = [
            {
                value: 'Permanent Address',
                readonly: true,
                cName: 'ad addform',
                type: 'textarea', 
                answer: studentInfo['Permanent Address']
            },
            {
                value: 'City',
                readonly: true,
                cName: 'ad cityform',
                type: 'text',
                answer: studentInfo['City']
            },
            {
                value: 'State',
                readonly: true,
                cName: 'ad stateform',
                type: 'text',
                answer: studentInfo['State']
            },
            {
                value: 'Domicile',
                readonly: true,
                cName: 'ad domicileform',
                type: 'text',
                answer: studentInfo['Domicile']
            },
        ]
        
        const gaurdianprofiledata = [
            {
                value: 'Father Name',
                readonly: true,
                cName: 'ga paform',
                type: 'text',
                answer: studentInfo['Father Name'] 
            },
            {
                value: 'Mother Form',
                readonly: true,
                cName: 'ga momform',
                type: 'text',
                answer: studentInfo['Mother Name']
            },
            {
                value: 'Contact Number',
                readonly: true,
                cName: 'ga ganumform',
                type: 'number',
                answer: studentInfo['Contact Number']
            },
            {
                value: 'Alternative Contact',
                readonly: true,
                cName: 'ga ganum2form',
                type: 'number', 
                answer: studentInfo['Alternative Contact Number']
            },
        ]
        
        const healthprofiledata = [
            {
                value: 'Blood Group',
                readonly: true,
                cName: 'he bloodform',
                type: 'text',
                answer: studentInfo['Blood Group'] 
            },
            {
                value: 'Allergies',
                readonly: true,
                cName: 'he alerform',
                type: 'text',
                answer: studentInfo['Allergies'] 
            },
            {
                value: 'Physical Disablities',
                readonly: true,
                cName: 'he phydform',
                type: 'text', 
                answer: studentInfo['Physical Disablities']
            },
        ]
        if (isLoading) {
            return <div>Loading profile information...</div>;
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
                        <div className="generalinfo">
                            <h2>General Infromation</h2>
                            <form className="geninfo">
                                {genprofiledata.map((props,value) => {
                                    return(
                                        <div key={value} className={props.cName}>
                                        <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                        :
                                        <input readOnly={props.readonly} className='input' name={props.value} type={props.type} id={props.value} value={props.answer}/>
                                        <br />
                                        </div>
                                    );
                                })}
                            </form>
                        </div>
                        <hr />
                        <div className="addresslinfo">
                            <h2>Address Infromation</h2>
                            <form>
                                {addressprofiledata.map((props,value) => {
                                    if(props.value==='Permanent Address'){
                                        return(
                                            <div key={value} className={props.cName}>
                                            <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                            :
                                            <textarea readOnly={props.readonly} className='input' name={props.value} type={props.type} id={props.value} value={props.answer}/>
                                            <br/>
                                            </div>
                                        );
                                    }
                                    else
                                    {
                                        return(
                                            <div key={value} className={props.cName}>
                                            <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                            :
                                            <input readOnly={props.readonly} className='input' name={props.value} type={props.type} id={props.value} value={props.answer}/>
                                            <br/>
                                            </div>
                                        );
                                    }
                                })}
                            </form>
                        </div>
                        <hr />
                        <div className="guardianinfo">
                            <h2>Gaurdian Infromation</h2>
                            <form>
                                {gaurdianprofiledata.map((props,value) => {
                                    return(
                                        <div key={value} className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                         :
                                         <input readOnly={props.readonly} className='input' name={props.value} type={props.type} id={props.value} value={props.answer}/>
                                            <br />
                                        </div>
                                    );
                                })}
                            </form>
                        </div>
                        <hr />
                        <div className="healthinfo">
                            <h2>Health Infromation</h2>
                            <form>
                                {healthprofiledata.map((props,value) => {
                                    return(
                                        <div key={value} className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                         :
                                         <input readOnly={props.readonly} className='input' name={props.value} type={props.type} id={props.value} value={props.answer}/>
                                        <br />
                                        </div>
                                    );
                                })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}