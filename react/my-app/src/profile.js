import React, { Component } from "react";
import { Header } from "./Header";
import { Navbar } from "./NavBar";

const genprofiledata = [
    {
        value: 'Name',
        readonly: true,
        cName: 'bo nameform',
        type: 'text', 
    },
    {
        value: 'Registration Number',
        readonly: true,
        cName: 'bo rollform',
        type: 'number', 
    },
    {
        value: 'Branch',
        readonly: true,
        cName: 'bo branchform',
        type: 'text', 
    },
    {
        value: 'Semester',
        readonly: true,
        cName: 'bo semform',
        type: 'number', 
    },
    {
        value: 'Year of Graduation',
        readonly: true,
        cName: 'bo nameform',
        type: 'number', 
    },
    {
        value: 'Contact Number',
        readonly: true,
        cName: 'bo contactform',
        type: 'number', 
    },
    {
        value: 'Hostel',
        readonly: true,
        cName: 'bo hostelorm',
        type: 'text', 
    },
    {
        value: 'Room Number',
        readonly: true,
        cName: 'bo roomform',
        type: 'number', 
    },
]

const addressprofiledata = [
    {
        value: 'Permanenet Address',
        readonly: true,
        cName: 'ad addform',
        type: 'text', 
    },
    {
        value: 'City',
        readonly: true,
        cName: 'ad cityform',
        type: 'text', 
    },
    {
        value: 'State',
        readonly: true,
        cName: 'ad stateform',
        type: 'text', 
    },
    {
        value: 'Domicile',
        readonly: true,
        cName: 'ad domicileform',
        type: 'text', 
    },
]

const gaurdianprofiledata = [
    {
        value: 'Father Name',
        readonly: true,
        cName: 'ga paform',
        type: 'text', 
    },
    {
        value: 'Mother Form',
        readonly: true,
        cName: 'ga momform',
        type: 'text', 
    },
    {
        value: 'Contact Number',
        readonly: true,
        cName: 'ga ganumform',
        type: 'number', 
    },
    {
        value: 'Alternative Contact Number',
        readonly: true,
        cName: 'ga ganum2form',
        type: 'number', 
    },
]

const healthprofiledata = [
    {
        value: 'Blood Group',
        readonly: true,
        cName: 'he bloodform',
        type: 'text', 
    },
    {
        value: 'Allergies',
        readonly: true,
        cName: 'he alerform',
        type: 'text', 
    },
    {
        value: 'Physical Disablities',
        readonly: true,
        cName: 'he phydform',
        type: 'text', 
    },
    
]
export default class Profile extends Component {
    render()
    {
        return(
            <div className="bache">
                <Header theme="headerch"/>
                <div className='studentcontent'>
                    <Navbar name = 'studnavprofile'/>
                    <div className='studprofile'>
                        <div className="generalinfo">
                            <h2>General Infromation</h2>
                            <form>
                                {genprofiledata.map((props,value) => {
                                    return(
                                        <li key={value}   className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                        <input 
                                                value={props.value}
                                                readOnly={props.readonly}
                                                className={props.className}
                                                placeholder={props.value}
                                                name={props.value}
                                                type={props.type}
                                            />
                                        </li>
                                    );
                                })}
                            </form>
                        </div>
                        <hr />
                        <div className="addresslinfo">
                            <h2>Address Infromation</h2>
                            <form>
                                {addressprofiledata.map((props,value) => {
                                    return(
                                        <li key={value}   className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                        <input 
                                                value={props.value}
                                                readOnly={props.readonly}
                                                className={props.className}
                                                placeholder={props.value}
                                                name={props.value}
                                                type={props.type}
                                            />
                                        </li>
                                    );
                                })}
                            </form>
                        </div>
                        <hr />
                        <div className="guardianinfo">
                            <h2>Gaurdian Infromation</h2>
                            <form>
                                {gaurdianprofiledata.map((props,value) => {
                                    return(
                                        <li key={value}   className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                        <input 
                                                value={props.value}
                                                readOnly={props.readonly}
                                                className={props.className}
                                                placeholder={props.value}
                                                name={props.value}
                                                type={props.type}
                                            />
                                        </li>
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
                                        <li key={value}   className={props.cName}>
                                         <label className={props.cName} htmlFor={props.value}>{props.value}</label>   
                                        <input 
                                                value={props.value}
                                                readOnly={props.readonly}
                                                className={props.className}
                                                placeholder={props.value}
                                                name={props.value}
                                                type={props.type}
                                            />
                                        </li>
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