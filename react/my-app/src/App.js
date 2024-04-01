import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from './student/student'
import{Login} from './components/Login'
import Profile from './student/profile';
import Course from "./student/course";
import Attendence from "./student/attendence";
import Grades from "./student/grades";
import Complaint from "./student/complaint";

 

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
          <Route path="/student/complaint" element={<Complaint/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}