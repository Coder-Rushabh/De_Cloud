import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import UserProfile from '../components/UserProfile';



function Vault() {

  const { logOut, user } = useUserAuth();
   const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (

   


    <div>

      <UserProfile />

    </div>

  )
}

export default Vault