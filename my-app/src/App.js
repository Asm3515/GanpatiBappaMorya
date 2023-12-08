import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Userpages/Home';
import Projects from './Userpages/Project'
import UniversityCollab from './Userpages/UniversityCollab';
import IndustryCollab from './Userpages/IndustryCollab';
import Registration from './Registration/Registration';
import Login_page from './Login/Login_page';
import User_page from './Userpages/User_Page';
import View_Course_Content from './Users_Pages_Content/View_Course_Content';
import Schedule_Appointment from './Users_Pages_Content/Schedule_Appointment';
import Cancel_Appointment from './Users_Pages_Content/Cancel_Appointment';
import Events from './Userpages/Events';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-projects" element={<Projects />} />
          <Route path="/universities-professors-collab" element={<UniversityCollab />} />
          <Route path="/industry-collaborations" element={<IndustryCollab />} />
          <Route path="/career-counselling-services" element={<IndustryCollab />} />
          
          <Route path="/Reg" element={<Registration />} />
          <Route path="/Login" element={<Login_page />} />
          <Route path="/User_page" element={<User_page />} />
          <Route path="/schedule-appointment" element={<Schedule_Appointment />} />
          <Route path="/view-course-content" element={<View_Course_Content />} />
          <Route path="/cancel-appointment" element={<Cancel_Appointment />} />
          <Route path="/events" element={<Events />} />
          
          {/* Add more routes for other components/pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;