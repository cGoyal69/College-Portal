import {Header} from './Header'
import {Navbar} from './NavBar'


export default function Student() {
    return(
      <div className='studentpage'>
        <Header theme="headerch"/>
        <div className='studentcontent'>
          <Navbar name = 'instructionstudent' />
          {}
          <div className='instructionstudent'>
            Instructions<br/> 
            <ol>
              <li>Please login with your username provided to you by your institution</li>
              <li>If you forget password go to admin section for password username reset</li>
              <li>In complaint avoid writing useless things as your responses are recorded for further use</li>
              <li>If site is down don't panic about anything</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }