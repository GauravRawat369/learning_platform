import "./App.css";
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import Home from "./components/Home";
import Products from "./components/main routes/Products";
import Services from "./components/main routes/Services"
import Contact from "./components/main routes/Contact";
import Videos from "./components/Videos";
import Courses from "./components/Courses";
import Privateroutes from "./components/Privateroutes";
import Createpost from "./components/Createpost";
import Postpage from "./components/Postpage";
// import jwt_decode from "jwt-decode";

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );
  useEffect(() => {
    // Save authentication state to localStorage
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path="/privateroute" element = {<Privateroutes authenticated={authenticated} setAuthenticated={setAuthenticated}/>}>
            <Route path="courses" element={<Courses authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/> 
            <Route path="videos" element={<Videos authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/> 
        </Route>
        <Route path="/login" element={<LogIn authenticated={authenticated} setAuthenticated={setAuthenticated}/>} />
        <Route path="/signup" element={<SignUp authenticated={authenticated} setAuthenticated={setAuthenticated}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createpost" element={<Createpost/>}/>
        <Route path="postpage/:id" element={<Postpage authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
      </Routes>
    </Router>
  );
}



export default App;
