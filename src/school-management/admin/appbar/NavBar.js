import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import labels from "../../utility/labels";

// ✅ Define static menu items
const menuItems = [
  { label: labels.labelDashboard, path: "/dashboard" },
  { label: labels.labelStudents, path: "/register" },
  { label: labels.labelTeachers, path: "/teachers" },
  { label: labels.labelSubjects, path: "/subjects" },
  { label: labels.labelLogout, path: "/logout" },
];

const NavBar = ({ setIsAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Open mobile menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close mobile menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle navigation click
  const handleNavigation = (index, path) => {
    setActiveTab(index);
    //hide navbar on click logout route
    path === "/logout" && setIsAuthenticated(false);
    navigate(path);
  
    handleMenuClose();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* App Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
          {labels.labelSchoolManagement}
        </Typography>

        {/* Desktop Tabs */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Tabs
            value={activeTab}
            onChange={(event, newValue) =>
              handleNavigation(newValue, menuItems[newValue].path)
            }
            textColor="inherit"
            indicatorColor="secondary"
          >
            {menuItems.map((item, index) => (
              <Tab key={item.label} label={item.label} />
            ))}
          </Tabs>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={item.label} onClick={() => handleNavigation(index, item.path)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



