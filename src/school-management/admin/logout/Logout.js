import React from "react";
import { BrowserRouter as  Router, Routes, Route, useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

// 🔹 Logout Page (Resets authentication)
const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
      setIsAuthenticated(false);
      navigate("/login"); // Redirect to login page
    };
  
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">You have logged out</Typography>
        <Button variant="contained" onClick={handleLogout} sx={{ mt: 2 }}>
          Login Again
        </Button>
      </Container>
    );
  };

  export default Logout;