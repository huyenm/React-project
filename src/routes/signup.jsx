import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

export default function SignUp() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

     const navigate = useNavigate();

  //prevent page to refresh
    const handleSubmit = (e) => {
      e.preventDefault();
    //validate input 
    
      if (!name || !username || !email || !password) {
      alert("Please fill out all fields.");
      return;
      }

    //save data if pass validation
      const usersData = []
      const userInfo = { 
        name,
        username,
        email,
        password
      }

    //retrieve existing users data from ls
      const usersdataLS = localStorage.getItem("usersdata");

      //If no existing data found => create new array with current user
      if(usersdataLS === null) {
        usersData.push(userInfo);
        localStorage.setItem("usersdata", JSON.stringify(usersData));
        navigate("/log-in");
      } 

      //If existing => 
      else 
      {
        alert("Username and email are already existed");
        const updatedUserData = JSON.parse(usersdataLS);
        updatedUserData.push(userInfo);
        localStorage.setItem("usersdata", JSON.stringify(updatedUserData));
        };
      };   
    

  return (
    <div className="main-container">
      <div className="wrapper">
        <h1> Sign Up 👋</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Full Name" 
          type="text" 
          value={name}
          setResult = { setName }
          placeholder="Enter your full name" 
        />
        <Input 
          label="Email" 
          type="email" 
          value={email}
          setResult = { setEmail }
          placeholder="Enter your email" 
        />
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
        
    
        <div className="flex-item">
          <input type="checkbox" ></input>
          <p className="term-text">
            I agree to the Terms & Service and Privacy Policy.
          </p>
        </div>
        
        <button className="btn" type="submit" >Sign Up</button>   

        <span className="input-login">
          Already have an account? <a href="/log-in">Log In</a>
        </span>

      </form>
    </div>
  )
}
