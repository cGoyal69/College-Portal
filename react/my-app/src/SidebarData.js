import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title : 'Student Profile',
        path: '/',
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