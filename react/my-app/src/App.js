import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from './student'
import{Login} from './Login'
import Profile from './profile';
import Course from "./course";
import Attendence from "./attendence";
import Grades from "./grades";
import Complaint from "./complaint";
 

export default function App() {
  return(
    <div className='Basepage'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path='/student/profile' element={<Profile />}/>
          <Route path='/student/course' element={<Course />}/>
          <Route path='/student/attendence' element={<Attendence />}/>
          <Route path='/student/grades' element={<Grades />}/>
          <Route path='/student/complaint' element={<Complaint/>}/>
        </Routes>
      </Router>
    </div>
  );
}

