import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper, Table, TableBody, 
        TableCell, TableContainer, TableHead, TableRow, IconButton, InputAdornment 
    } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux';
import { addTeacher } from '../../redux/teacherSlice';
import messages from "../../utility/messages";
import labels from "../../utility/labels";

const Teachers = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        description: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    });
    const teachers = useSelector(state => state.teachers.teachers); //reducer assign value
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
        tempErrors.fullName = formData.fullName ? "" : messages.teacherFullName;
        tempErrors.description = formData.description ? "" : messages.teacherDescription;
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : messages.teacherEmailID;
        tempErrors.phone = formData.phone ? "" : messages.teacherPhone;
        tempErrors.username = formData.username ? "" : messages.teacherUsername;
        tempErrors.password = formData.password.length >= 6 ? "" : messages.teacherPassword;

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(messages.registrationSuccess);
            dispatch(addTeacher({...formData}));
            setFormData({ fullName: "", description:"", email: "", phone: "", username:"", password: "" });
        }
    };

    return (
        <Container sx={{marginTop: 5}}>
            <Paper elevation={10} sx={{ padding: 5, textAlign: "center", maxWidth: 400, margin:"auto" }}>
                <Typography variant="h5" gutterBottom>
                   {labels.labelTeacherRegistration}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label={labels.labelTeacherFullName}
                            variant="outlined"
                            name="fullName"
                            fullWidth
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                        />
                        <TextField
                            label={labels.labelTeacherDescription}
                            variant="outlined"
                            name="description"
                            fullWidth
                            value={formData.description}
                            onChange={handleChange}
                            error={!!errors.description}
                            helperText={errors.description}
                        />
                        <TextField
                            label={labels.labelTeacherEmail}
                            variant="outlined"
                            name="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            label={labels.labelTeacherPhone}
                            variant="outlined"
                            name="phone"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                        />
                        <TextField
                            label={labels.labelTeacherUsername}
                            variant="outlined"
                            name="username"
                            fullWidth
                            value={formData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                        <TextField
                            label={labels.labelTeacherPassword}
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
                            {labels.btnRegister}
                        </Button>
                    </Box>
                </form>
            </Paper>
            {/* Display Data in Table */}
            {teachers.length > 0 && (
                <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#1976d2" }}>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherFullName}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherDescription}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherEmail}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherPhone}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherUsername}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelTeacherPassword}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teachers.map((teacher, index) => (
                                <TableRow key={index}>
                                    <TableCell>{teacher.fullName}</TableCell>
                                    <TableCell>{teacher.description}</TableCell>
                                    <TableCell>{teacher.email}</TableCell>
                                    <TableCell>{teacher.phone}</TableCell>
                                    <TableCell>{teacher.username}</TableCell>
                                    <TableCell>{teacher.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </Container>
    );
};

export default Teachers;
