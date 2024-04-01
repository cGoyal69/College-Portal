import React,{ useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as GoIcons from "react-icons/go";
//import * as RiIcons from "react-icons/ri";
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
        path: '/student/attendence',
        icon:  <IoIcons.IoMdCheckboxOutline />,
        cName: 'nav-text attendance'
    },
    {
        title: 'Grades',
        path: '/student/grades',
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
        path: '/student/complaint',
        icon:   <GoIcons.GoReport/>,
        cName:  'nav-text complaint'
    },
    /*{
        title: 'Update Password',
        path: '/student/updatepass',
        icon:   <RiIcons.RiLockPasswordLine />,
        cName:  'nav-text updatepass'
    },*/
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
        a.style.left='';
        b.style.left='-14%';
        c.style.opacity='1';
        setTimeout(displaytimer2, 1000);
    }
    const onConfirmRefresh = function (event) {
        event.preventDefault();
        return event.returnValue = "Are you sure you want to leave the page?";
      }
      
      window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
    return(
        <div className='nav-menu'>
            <IconContext.Provider value={{color:'black'}}>
                <nav>
                    <ul className='nav-menu-items'  >
                        <li className='navbar-toggle' >
                            <Link to='#' className='menu-bars' >
                                <AiIcons.AiOutlineClose onClick={closeNav} className='four' id='four'/>
                                <FaIcons.FaBars onClick={openNav} className='three' id='three'/>
                            </Link>
                        </li>
                        {studentSidebarData.map((item,index)=>{
                            return (
                                <li key={index}   className={item.cName}>
                                    <Link to={item.path}>
                                        <span className='navtitle' id='navtitle'>{item.title}</span>
                                        <span className='nav-icon' id='nav-icon'>{item.icon}</span>
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