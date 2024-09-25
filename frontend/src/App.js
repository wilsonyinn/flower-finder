import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import SubmitPost from "./pages/SubmitPostPage";
import ViewPost from "./pages/ViewPostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<LandingPage />}/>
        <Route path= "/login" element={<LoginPage />}/>
        <Route path= "/register" element={<RegistrationPage />}/>
        <Route path= "/submitPost" element={<SubmitPost />}/>
        <Route path= "/viewPost" element={<ViewPost />}/>
      </Routes>
    </Router>
  );
}

export default App;