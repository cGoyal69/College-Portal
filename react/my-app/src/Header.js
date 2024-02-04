import iiitm from  './iiitm.png';

export function Header({theme}){
    return(
    <header className={theme}>
      <div className="logo">
        <a href="http://www.iiitmanipur.ac.in/"><img className="imgLogo" src={iiitm} alt="logo"/></a>
      </div>
      <h1>
        <div className="hindi">भारतीय सूचना प्रौद्योगिकी संस्थान सेनापति, मणिपुर<br/></div>
        <div className="english">Indian Institute for Information Technology Senapati, Manipur<br/></div>
        <div className="chhotaheading">(An Institute of National Importance by Act of Parliament, Govt. of India)</div>
      </h1>
    </header>
    );
}
