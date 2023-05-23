import React, { useState } from 'react';
import axios from 'axios';
import { REGISTER_USER } from '../constants';


function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    axios.post(REGISTER_USER, {
        username: username,
        email: email
})
.then(response=>{
    console.log(response.data);
    if (response.status != 201){return;}

    setIsRegistered(true);
    const link = generateSpecialLink();
    setGeneratedLink(link);
    })
    .catch(error=>{
        alert(error.response.data.username[0]);
    })

    
  };

  const handleCopyLink = () => {
    // Copy the generated link to the clipboard
    navigator.clipboard.writeText(generatedLink);
    setIsLinkCopied(true);
  };

  const generateSpecialLink = () => {
    // Custom logic to generate the special link
    return window.location.origin+`/login?hostName=${username}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Registration Page</h2>
      {!isRegistered ? (
        <form onSubmit={handleRegistration} className="w-64">
            {
                usernameTaken && <p className="text-red-600" >Username taken! use another username please!</p>
            }
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Registration successful!</h3>
          <p className="mb-2">Special Link:</p>
          <div className="bg-gray-100 p-2 rounded mb-4">{generatedLink}</div>
          <button
            onClick={handleCopyLink}
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {isLinkCopied ? 'Link Copied!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
