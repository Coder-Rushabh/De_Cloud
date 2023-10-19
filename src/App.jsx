import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Vault from "./pages/Vault";

import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (

          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/vault"
                element={
                  <ProtectedRoute>
                    <Vault />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />


            </Routes>
          </UserAuthContextProvider>
 
  );
}

export default App;