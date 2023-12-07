import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Userpages/Home';
import Projects from './Userpages/Project'
import UniversityCollab from './Userpages/UniversityCollab';
import IndustryCollab from './Userpages/IndustryCollab';
import Registration from './Registration/Registration';
import Login_page from './Login/Login_page';
import User_page from './Userpages/User_Page';


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
          <Route path="/career-counselling-services" element={<IndustryCollab />} />
          <Route path="/Reg" element={<Registration />} />
          <Route path="/Login" element={<Login_page />} />
          <Route path="/User_page" element={<User_page />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;