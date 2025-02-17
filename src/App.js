import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css';
import NavBar from "./school-management/admin/appbar/NavBar";
import Login from "./school-management/login/Login";
import Registerstudent from './school-management/admin/students/Registerstudent';
import Dashboard from "./school-management/admin/dashboard/Dashboard";
import Teachers from "./school-management/admin/teachers/Teachers";
import Admission from "./school-management/admin/admissions/Admission";
import Subjects from "./school-management/admin/subjects/Subjects";
import Logout from "./school-management/admin/logout/Logout";

// 🔹 Fake Authentication Hook
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return { isAuthenticated, setIsAuthenticated };
};

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [admissions, setAdmissions] = useState([]); //admissions details state
  
  useEffect(() => {
    fetch("/data.json") // Replace with your actual API
      .then((response) => response.json())
      .then((data) => setAdmissions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div className="App">
      <Router>
         {/* Show AppBar only if authenticated */}
         {isAuthenticated && <NavBar setIsAuthenticated={setIsAuthenticated} />}
          <Routes>
            {/* school management  */}
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="/dashboard" element={isAuthenticated ?<Dashboard admissionCount={admissions.length} />: <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={isAuthenticated ? <Registerstudent />: <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/teachers" element={isAuthenticated ? <Teachers />: <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/admissions" element={isAuthenticated ? <Admission admissions={admissions} />: <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/subjects" element={isAuthenticated ? <Subjects />: <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated}/>} />
            {/* school management  */}
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
