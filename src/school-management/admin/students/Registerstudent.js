import React, { useState } from "react";
import {
    Container, TextField, Button, Typography, Box, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, IconButton, InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '../../redux/studentSlice';

const Registerstudent = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
    });
    const students = useSelector(state => state.students.students); //reducer assign value
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = formData.fullName ? "" : "Full Name is required!";
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Valid email is required!";
        tempErrors.phone = formData.phone ? "" : "Phone Number is required!";
        tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters!";

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registration Successful! ✅");
            dispatch(addStudent({ ...formData }));
            setFormData({ fullName: "", email: "", phone: "", password: "" });
        }
    };

    return (
        <Container sx={{ marginTop: 5 }}>
            <Paper elevation={10} sx={{ padding: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Student Registration
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            name="fullName"
                            fullWidth
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            label="Phone"
                            variant="outlined"
                            name="phone"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
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
                            Register
                        </Button>
                    </Box>
                </form>
            </Paper>
            {/* Display Data in Table */}
            {students.length > 0 && (
                <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#1976d2" }}>
                                <TableCell sx={{ color: "white" }}>Full Name</TableCell>
                                <TableCell sx={{ color: "white" }}>Email</TableCell>
                                <TableCell sx={{ color: "white" }}>Phone</TableCell>
                                <TableCell sx={{ color: "white" }}>Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell>{student.fullName}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>{student.phone}</TableCell>
                                    <TableCell>{student.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </Container>
    );
};

export default Registerstudent;
