/* eslint-disable no-unreachable */

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
];

export function DropdownMenu(){
    return(
        <div className="dropdown">
            <div>
                {studentSidebarData.map((item, index) => {
                    return(
                    <span className={item.cName}>{item.title}</span>
                    );
                })}
            </div>
        </div>
    );
}