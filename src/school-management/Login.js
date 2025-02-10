import React, { useState } from "react";
import { Container, TextField, IconButton, InputAdornment, Button, Typography, Box, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.username = formData.username ? "" : "Username is required!";
        tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters!";

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("isLoggedIn", "true"); // Store login status
            setIsLoggedIn(true);
            alert("Login Successful! ✅");
            navigate("/dashboard");
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 5, textAlign: "center", marginTop: 8 }}>
                <Typography variant="h5" gutterBottom>
                    Admin
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            name="username"
                            fullWidth
                            value={formData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"} // Toggle input type
                            name="password"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
