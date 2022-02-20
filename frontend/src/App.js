import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddDepartmentPage from './pages/AddDepartmentPage'
import DepartmentsPage from './pages/DepartmentsPage'
import AddStudentPage from './pages/AddStudentPage'
import StudentsPage from './pages/StudentsPage'
import AddInstructorPage from './pages/AddInstructorPage';
import InstructorsPage from './pages/InstructorsPage';
import AddAdvisorPage from './pages/AddAdvisorPage';
import AdvisorsPage from './pages/AdvisorsPage';
import AddCoursePage from './pages/AddCoursePage';
import CoursesPage from './pages/CoursesPage';
import AddClassroomPage from './pages/AddClassroomPage';
import ClassroomsPage from './pages/ClassroomsPage';
import AddTimeslotPage from './pages/AddTimeslotPage';
import TimeslotsPage from './pages/TimeslotsPage';
import AddSectionPage from './pages/AddSectionPage';
import SectionsPage from './pages/SectionsPage';
import AddStudentTakesSectionPage from './pages/AddStudentTakesSectionPage';
import StudentTakesSectionsPage from './pages/StudentTakesSectionsPage';
import AddInstructorTeachesSectionPage from './pages/AddInstructorTeachesSectionPage';
import InstructorTeachesSectionsPage from './pages/InstructorTeachesSectionsPage';

function App() {
  return (
    <>
  <Router className='app'>
    <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/api/add-department" element={<AddDepartmentPage/>}/>
        <Route exact path="/api/departments" element={<DepartmentsPage/>}/>
        <Route exact path="/api/add-student" element={<AddStudentPage/>}/>
        <Route exact path="/api/students" element={<StudentsPage/>}/>
        <Route exact path="/api/add-instructor" element={<AddInstructorPage/>}/>
        <Route exact path="/api/instructors" element={<InstructorsPage/>}/>
        <Route exact path="/api/add-advisor" element={<AddAdvisorPage/>}/>
        <Route exact path="/api/advisors" element={<AdvisorsPage/>}/>
        <Route exact path="/api/add-course" element={<AddCoursePage/>}/>
        <Route exact path="/api/courses" element={<CoursesPage/>}/>
        <Route exact path="/api/add-classroom" element={<AddClassroomPage/>}/>
        <Route exact path="/api/classrooms" element={<ClassroomsPage/>}/>
        <Route exact path="/api/add-timeslot" element={<AddTimeslotPage/>}/>
        <Route exact path="/api/timeslots" element={<TimeslotsPage/>}/>
        <Route exact path="/api/add-section" element={<AddSectionPage/>}/>
        <Route exact path="/api/sections" element={<SectionsPage/>}/>
        <Route exact path="/api/add-student-section" element={<AddStudentTakesSectionPage/>}/>
        <Route exact path="/api/student-sections" element={<StudentTakesSectionsPage/>}/>
        <Route exact path="/api/add-instructor-section" element={<AddInstructorTeachesSectionPage/>}/>
        <Route exact path="/api/instructor-sections" element={<InstructorTeachesSectionsPage/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
