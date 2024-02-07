import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from './student'
import{Login} from './Login'
import Profile from './profile';
import Course from "./course";
 

export default function App() {
  return(
    <div className='Basepage'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path='/student/profile' element={<Profile />}/>
          <Route path='/student/course' element={<Course />}/>
        </Routes>
      </Router>
    </div>
  );
}

