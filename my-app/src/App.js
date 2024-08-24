import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/page/HomePage";
import HomeSignin from "./components/page/HomeSignin";
import Profile from "./components/page/Profile";
import SignIn from "./components/SignIn/SignIn";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn setToken={setToken} />} />
        <Route 
          path="/home" 
          element={token ? <HomeSignin /> : <Navigate to="/sign-in" />} 
        />
        <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/sign-in" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
