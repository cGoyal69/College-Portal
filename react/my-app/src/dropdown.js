import React, { useState } from 'react'

const studentSidebarData = [
    {
        title: 'Hostel Warden',
        path: '/student',
        cName: 'nav-text home'
    },
    {
        title : 'Academic Section',
        path: '/student/profile',
        cName: 'nav-text profile'
    }
]

export function DropdownMenu(){
    const[dropdown,setDropdown] = useState(null)

    
}