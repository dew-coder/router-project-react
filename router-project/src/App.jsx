import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute"


function App() {
  // to show login signup or outout dashboard btn
  const [isLogged, setLogged] = useState(false);

  return (
    <div>
    <Navbar isLogged={isLogged} setLogged = {setLogged} />
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/Login" element = {<Login setLogged = {setLogged} />} />
      <Route path="/Signup" element = {<Signup setLogged = {setLogged} />} />
      <Route path="/Dashboard" element = {
      <PrivateRoute isLogged = {isLogged}>
        <Dashboard/>
      </PrivateRoute>
      } />
    </Routes>
  </div>
  )
}

export default App;
