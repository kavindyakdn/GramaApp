import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  const { signIn} = useAuthContext();

  return (
    <div className="landing-page">
  
            <div className="welcome-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/web-login-7e719.appspot.com/o/logo%20full.png?alt=media&token=6ac63cc0-86bb-4333-85b9-bd63cb3b6df6"
               alt="Welcome." className="welcome-image" />
              <div className="welcome-text">
                <p className="welcome-header">
                Welcome to Grama Check! 
                </p>
                <p className="welcome-message">
                  Experience excellence in service                
                </p>
                <button onClick={() => signIn()}>Sign In</button>
              </div>
            </div>
    </div>
  );
};

export default LandingPage;