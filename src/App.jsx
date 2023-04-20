import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const [showresult, showResult] = useState(false);

  
  //useEffect(() => {})

  return (
    <div className="sign-up">
      <h1>Create Account 👋</h1>
      <form action="">
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
        
        <button className="btn" type="submit" onClick={() => showResult(true)} >Sign Up</button>   

        { showresult &&
          <div className= "result-hidden">
            <p className="result-text">Full name: {name}</p>
            <p className="result-text">Email: {email}</p>
            <p className="result-text">Username: {username}</p>
          </div>   
        }
         
      </form>
    </div>
  )
}

export default App
