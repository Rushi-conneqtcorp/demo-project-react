import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import './App.css';

import AppBarWithLogout from "./school-management/admin/appbar/AppBarWithLogout";
import Login from "./school-management/login/Login";
import Registerstudent from './school-management/admin/students/Registerstudent';
import Dashboard from "./school-management/admin/dashboard/Dashboard";
import Teachers from "./school-management/admin/teachers/Teachers";
import Admission from "./school-management/admin/admissions/Admission";
import Subjects from "./school-management/admin/subjects/Subjects";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admissions, setAdmissions] = useState([]); //admissions details state

  useEffect(() => {
    fetch("/data.json") // Replace with your actual API
      .then((response) => response.json())
      .then((data) => setAdmissions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  // Check login status on component mount
  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(user === "true");
  }, []);

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <AppBarWithLogout setIsLoggedIn={setIsLoggedIn} />}
        <Container>
          <Routes>
            {/* school management  */}
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard admissionCount={admissions.length} /> : <Navigate to="/" />} />
            <Route path="/register" element={isLoggedIn ? <Registerstudent /> : <Navigate to="/" />} />
            <Route path="/teachers" element={isLoggedIn ? <Teachers /> : <Navigate to="/" />} />
            <Route path="/admissions" element={isLoggedIn ? <Admission admissions={admissions} /> : <Navigate to="/" />} />
            <Route path="/subjects" element={isLoggedIn ? <Subjects /> : <Navigate to="/" />} />

          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
