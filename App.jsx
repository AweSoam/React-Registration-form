import { User, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Profile from "./Profile";
import Form from "./Form";
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const {User, loginWithRedirect}= useAuth0();

  console.log("current user", User);
  const navigate = useNavigate();
//   navigate('/profile');

  return (
    <>
      <button onClick={(e)=> loginWithRedirect()}>Login with Redirect</button>
      
      <Routes>
          <Route
              path="/form"
              element={<Form />}
          />
          <Route
              path="/profile"
              element={<Profile />}
          />
         
      </Routes> 
      
    </>
  );
}

export default App


