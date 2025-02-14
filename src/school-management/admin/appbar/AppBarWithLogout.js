import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarWithLogout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    setIsLoggedIn(false);
    alert("Logout Successful! ✅");
    navigate("/"); // Redirect to login page
  };

  // Handle Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/dashboard");
    if (newValue === 1) navigate("/register");
    if (newValue === 2) navigate("/teachers");
    if (newValue === 3) navigate("/admissions");
    if (newValue === 4) navigate("/subjects");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* App Name on Left */}
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left", display: { xs: "none", sm: "block" } }}>
            School management
          </Typography>

          {/* Logout Button on Right */}

          <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Tab label="Dashboard" />
            <Tab label="Students" />
            <Tab label="Teachers" />
            <Tab label="Admissions" />
            <Tab label="Subjects" />
          </Tabs>

          {/* Mobile Menu Icon */}
          <IconButton size="large" edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleMenuOpen}
          >
          <MenuIcon />
          </IconButton>

          {/* Mobile Menu Items */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
              <Tab label="Dashboard" />
              <Tab label="Students" />
              <Tab label="Teachers" />
              <Tab label="Admissions" />
              <Tab label="Subjects" />
            </Tabs>
          </Menu>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarWithLogout;
