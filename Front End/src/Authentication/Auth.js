import React,{useEffect} from "react";
import { useAuthContext  } from "@asgardeo/auth-react";
import LandingPage from "../Pages/LandingPage/LandingPage";

function Auth() {

  const { state, signIn, signOut,getAccessToken  } = useAuthContext();

  useEffect(() => {
    getAccessToken ().then((idToken) => {
        console.log(idToken);
    }).catch((error) => {
        console.log(error);
    })
}, []);

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                <li>{state.username}</li>
                <li></li>
              </ul>

              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          :(<>
          <LandingPage></LandingPage>
          </>)
      }
    </div>
  );
}

export default Auth;