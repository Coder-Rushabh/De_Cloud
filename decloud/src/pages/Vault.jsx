import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import UserProfile from '../components/UserProfile';



function Vault({ account, provider, contract }) {

  const { logOut, user } = useUserAuth();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const navigate = useNavigate();

  return (
    <div>

      <UserProfile account={account}
                   provider={provider}
                   contract={contract} />

    </div>
  )
}

export default Vault