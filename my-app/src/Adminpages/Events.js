import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png';
import '../Css/Project.css';
import axios from 'axios';

const paths = {
  Home: "/",
};

const Courses = () => {
  const navigate = useNavigate();
  const [currentUserType, setCurrentUserType] = useState('');

  const handleRegister = async (e, id) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');
    let currentUser = null;

    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      console.log('Current user:', currentUser);
    } else {
      navigate("/login"); // Redirect to login screen if user is not present
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/event/${id}`,
        {
          user: currentUser._id
        }
      );

      alert(`${currentUser.First_name} registered successfully`);
      navigate("/events");
    } catch (error) {
      console.error("course Error:", error.message);
    }
  };

  const [events, setEvents] = useState([]);

  const fetchProjects = () => {
    fetch("http://localhost:3000/event/")
      .then(response => response.json())
      .then(data => setEvents(data.event));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let currentUser = null;

    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      console.log('Current user:', currentUser);
    } else {
      navigate("/login"); // Redirect to login screen if user is not present
      return;
    }

    setCurrentUserType(currentUser.Type_user);
    fetchProjects();
  }, []);

  const onHOMETextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className="desktop-4">
      <b className="seet-lab">SEET LAB</b>
      <Link to={paths.Home} className="home" onClick={onHOMETextClick}>
        HOME
      </Link>
      <div className="Header-container">
        <p className="Header">
          <b>Dr. Venkata Inukollu</b>
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">Assistant Professor</p>
        <p className="blank-line">Department of Computer Science</p>
        <p className="blank-line">Purdue University Fort Wayne</p>
      </div>
      <img className="image-2-icon" alt="" src={Logo} />
      <img className="desktop-4-child" alt="" src="/line-1.svg" />
      <b className="Name-tag">Events Details:</b>
      <div className="desktop-4-item login_form">
        {currentUserType === 'Admin' && <Link to="/Create_Events">create events</Link>}
        <br />
        {events.length > 0 ? (
          <table>
            <tbody>
              {events.map((eventItem) => {
                const xid = eventItem._id;
                return (
                  <React.Fragment key={xid}>
                    <tr>
                      <td colSpan="2">{eventItem.name}</td>
                      <button
                        style={{
                          padding: '50px',
                          backgroundColor: 'black',
                          color: 'white',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={(e) => { console.log(xid); handleRegister(e, xid); }}
                      >
                        Register
                      </button>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No projects found.</p>
        )}
      </div>
      <b className="sweet-water-fortwayne-container">
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne"></p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
      </b>
    </div>
  );
};

export default Courses;