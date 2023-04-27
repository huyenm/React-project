import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';

export default function LogIn() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); 

      //check if user exist
      const usersData = JSON.parse(localStorage.getItem("usersdata")) || [];
      const isLoggedIn = loginUser(username, password, usersData);

      if (isLoggedIn) {
      // User is logged in => redirect to home page or dashboard
        console.log("User logged in successfully!");
        navigate("/");
      } else {
      // User not found => display error message
        console.log("Invalid username or password.");
        alert("Invalid username or password");
      };
    };

    function loginUser(username, password, usersData) {
      for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].username === username && usersData[i].password === password) {
          return true;
        }
      }
      return false;
    };

    return (
    <div className="main-container">
      <div className="wrapper">
        <h1>Log In 👋</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Username" 
          type="text" 
          value={username}
          setResult = { setUsername }
          placeholder="Enter your username" 
        />
        <Input 
          label="Password" 
          type="password" 
          value={password}
          setResult = { setPassword }
          placeholder="Enter your password" 
        />
  
        <button className="btn" type="submit" >Sign In</button>   
        <div className="wrapper">
            <Link to="" >Forgot password?</Link>
        </div>
      </form>
    </div>
  )
};

