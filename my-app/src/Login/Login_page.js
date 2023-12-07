import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png';
import '../Css/Project.css';
import axios from 'axios';

const paths = {
  Home: "/",
};

const userId ='';
const password ='';
const Login_page = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");   

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        {
          email: userId,
          password: password
        }
      );

      const user = response.data.user;
      console.log(`Logged in as ${user.userId}`);
      // Add logic for navigation or other actions
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const onHOMETextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className="desktop-4">
      <b className="seet-lab"> SEET LAB</b>
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
      <b className="Name-tag">Industry Collaboration :</b>
      <div className="desktop-4-item">
        <div className="login_form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="footer-btns">
        <button className="login-new-user" >
          <a href="/signup" target="_blank" rel="noopener noreferrer">
            New User?
          </a>
        </button>
      </div>
      <b className="sweet-water-fortwayne-container">
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne"></p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
      </b>
    </div>
    </div>
  );
};

export default Login_page;