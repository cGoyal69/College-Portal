import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from './student'
import{Login} from './Login'
import{Header} from './Header'
 
export default function App() {
  return(
    <div className='Basepage'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/student" element={<Student/>}/>
        </Routes>
      </Router>
    </div>
  );
}

