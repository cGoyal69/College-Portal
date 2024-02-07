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
        path: '/student',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text home'
    },
    {
        title : 'Student Profile',
        path: '/student/profile',
        icon:  <FaIcons.FaUserCircle/> , 
        cName: 'nav-text profile'
    },
    {
        title: 'Course registered',
        path: '/student/course',
        icon:  <IoIcons.IoMdCard />,
        cName: 'nav-text courses'
    },
    {
        title: 'Attendence',
        path: '/',
        icon:  <IoIcons.IoMdCheckboxOutline />,
        cName: 'nav-text attendance'
    },
    {
        title: 'Grades',
        path: '/',
        icon:  <GrIcons.GrScorecard />,
        cName: 'nav-text grades'
    },
    {
        title: 'Leave Form',
        path: '/',
        icon:  <FaIcons.FaWpforms />,
        cName: 'nav-text leaveform'
    },
    {
        title: 'Complaints',
        path: '/',
        icon:   <GoIcons.GoReport/>,
        cName:  'nav-text complaint'
    },
]
export function Navbar({name}){

    const [sidebar,setSidebar] = useState(true)
    const showSidebar = () => {setSidebar(!sidebar)}
    
    const openNav=()=>{
        showSidebar();
        const a = document.getElementsByClassName('nav-menu')[0]
        const b = document.getElementsByClassName(name)[0]
        const c = document.getElementsByClassName('three')[0]
        const displaytimer = () => {
            c.style.display = "none";
        }
        a.style.left='0%';
        b.style.left='0%';
        c.style.opacity = '0';
        setTimeout(displaytimer, 1000);
    }
    const closeNav=()=>{
        showSidebar();
        const a = document.getElementsByClassName('nav-menu')[0];
        const b = document.getElementsByClassName(name)[0];
        const c = document.getElementsByClassName('three')[0];
        const displaytimer2 = () => {
            c.style.display = "block";
        }
        a.style.left='-13.5%';
        b.style.left='-13.5%';
        c.style.opacity='1';
        setTimeout(displaytimer2, 1000);
    }
    return(
        <div className='nav-menu'>
            <IconContext.Provider value={{color:'black'}}>
                <nav>
                    <ul className='nav-menu-items'  >
                        <li className='navbar-toggle' >
                            <Link to='#' className='menu-bars' >
                                <AiIcons.AiOutlineClose onClick={closeNav} className='four'/>
                                <FaIcons.FaBars onClick={openNav} className='three'/>
                            </Link>
                        </li>
                        {studentSidebarData.map((item,index)=>{
                            return (
                                <li key={index}   className={item.cName}>
                                    <Link to={item.path}>
                                        <span className='navtitle'>{item.title}</span>
                                        <span className='nav-icon'>{item.icon}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}