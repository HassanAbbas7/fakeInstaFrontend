import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InstaLogin from './pages/instaLogin.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      setIsLoggedIn(true);
      console.log(data);
    }
  };


  return (
    <>
      <Routes>
          <Route path="/" element={<InstaLogin/>} />
        </Routes>
        
    </>
  )
}

export default App
