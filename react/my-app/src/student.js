import {Header} from './Header'

export default function Student() {
    return(
      <div className='studentpage'>
        <Header theme="headerch"/>
        <div className='sidenav'>
            <div className='navele profile'>Profile</div>
            <div className='navele grade'>Grades</div>
            <div className='navele complaint'>Complaint</div>
        </div>
      </div>
    );
  }