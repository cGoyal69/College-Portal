import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from './student'
import{Login} from './Login'
import Profile from './profile';
 

export default function App() {
  return(
    <div className='Basepage'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/student" element={<Student/>}/>
<<<<<<< HEAD
          <Route path='/student/profile' element={<Profile /> } />
=======
          <Route path='/student/profile' element={ <Profile /> } />
>>>>>>> 041822a63b0803a333d807521f82a240831c6628
        </Routes>
      </Router>
    </div>
  );
}

