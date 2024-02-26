import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Form from "./Form";
import { Route, Routes, useNavigate } from "react-router-dom";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate= useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  <Routes>
  <Route
      path="/form"
      element={<Form />}
  />
</Routes> 
  

  return (
       


    isAuthenticated &&(
        navigate('/form')
    )

   
  );
};

export default Profile;