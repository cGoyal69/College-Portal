import React,{ useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as GoIcons from "react-icons/go";

const studentSidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title : 'Student Profile',
        path: '/student/profile',
        icon:  <FaIcons.FaUserCircle/> , 
        cName: 'profile'
    },
    {
        title: 'Course registered',
        path: '/',
        icon:  <IoIcons.IoMdCard />,
        cName: 'courses'
    },
    {
        title: 'Attendence',
        path: '/',
        icon:  <IoIcons.IoMdCheckboxOutline />,
        cName: 'attendance'
    },
    {
        title: 'Grades',
        path: '/',
        icon:  <GrIcons.GrScorecard />,
        cName: 'grades'
    },
    {
        title: 'leave form',
        path: '/',
        icon:  <FaIcons.FaWpforms />,
        cName: 'leaveform'
    },
    {
        title: 'Complaints',
        path: '/',
        icon:   <GoIcons.GoReport/>,
        cName:  'complaint'
    },
]

export function Navbar(){
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <div className='nav'>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar} >
                <li className='navbar-toggle' >
                    <Link to='#' className='menu-bars' >
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {studentSidebarData.map((item,index)=>{
                    return (
                        <li key={index}   className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </div>
    );
}