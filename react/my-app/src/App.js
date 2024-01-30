import{Login} from './Login'
 
export default function Header() {
  return(
    <div className='firstpage'>
    <header>
      <div className="logo">
        <a href="http://www.iiitmanipur.ac.in/"><img className="imgLogo" src="iiitm.png" alt="logo"/></a>
      </div>
      <h1>
        <div className="hindi">भारतीय सूचना प्रौद्योगिकी संस्थान सेनापति, मणिपुर<br/></div>
        <div className="english">Indian Institute for Information Technology Senapati, Manipur<br/></div>
        <div className="chhotaheading">(An Institute of National Importance by Act of Parliament, Govt. of India)</div>
      </h1>
    </header>
    <div className='Login-Box'>
      <div className='instruction'>
        Instructions<br/> 
        <ol>
          <li>Please login with your username Provided to you by your institution</li>
          </ol>
          </div>
      <div className='log'><Login /></div>
    </div>
    </div>
  );
}

