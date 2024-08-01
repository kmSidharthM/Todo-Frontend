import { useState } from "react";
import authApi from "../../api/auth";
import { routes } from "../routes";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { buildUrlProject } from "../Utils/buildUrl";

const AuthPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const authenticateUser = async (loginData) => {
    try {
      await authApi.authenticate(loginData);
      history.push(buildUrlProject(routes.home.index, { username }));
    }
    catch(error) {
      console.log(error);
      console.log("Authentication failed")
      setIsError(true);
    }
  }

  const registerUser = async (loginData) => {
    try {
      authApi.register(loginData);
      history.push(buildUrlProject(routes.home.index, { username }));
    }
    catch(error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    const loginData = {
      username,
      password
    };
    if(isNewUser) {
      registerUser(loginData);
    } else {
      authenticateUser(loginData);
    }
  }

  return ( 
    <div className="h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center font-poppins">
      <p className="text-red-600 mb-4">{isError && "Incorrect username or password"}</p>
      <div className="flex flex-col items-center gap-4 border-2 border-yellow-400 shadow-lg p-6 rounded-b-lg rounded-tr-lg ">
        <h1 className="font-ribeye text-4xl mb-8 text-white">TODO APP</h1>
        <input className="p-2 w-64 bg-transparent text-white border-2 border-yellow-400 rounded-b-lg rounded-tr-lg" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
        <input className="p-2 w-64 bg-transparent text-white border-2 border-yellow-400 rounded-b-lg rounded-tr-lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleClick} className="py-2 px-8 border-2 border-yellow-400 text-white rounded-b-lg rounded-tr-lg">{isNewUser ? "Sign Up" : "Log In"}</button>
        <div className="flex gap-2">
          <input id="new-user" type="checkbox" onChange={() => setIsNewUser((prev) => !prev)}/>
          <label className="text-white" htmlFor="new-user">New User?</label>
        </div>
      </div>
    </div>
  );
}
export default AuthPage;