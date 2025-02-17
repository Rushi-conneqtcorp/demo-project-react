import React, { useState } from "react";
import {
    Container, TextField, Button, Typography, Box, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, IconButton, InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '../../redux/studentSlice';
import labels from "../../utility/labels";
import messages from "../../utility/messages";

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
        tempErrors.fullName = formData.fullName ? "" : messages.studentFullName;
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : messages.studentEmailID;
        tempErrors.phone = formData.phone ? "" : messages.studentPhone;
        tempErrors.password = formData.password.length >= 6 ? "" : messages.studentPassword;

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(messages.registrationSuccess);
            dispatch(addStudent({ ...formData }));
            setFormData({ fullName: "", email: "", phone: "", password: "" });
        }
    };

    return (
        <Container sx={{ marginTop: 5 }}>
            <Paper elevation={10} sx={{ padding: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    {labels.labelStudentRegistration}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label={labels.labelStudentFullName}
                            variant="outlined"
                            name="fullName"
                            fullWidth
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                        />
                        <TextField
                            label={labels.labelStudentEmail}
                            variant="outlined"
                            name="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            label={labels.labelStudentPhone}
                            variant="outlined"
                            name="phone"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                        />
                        <TextField
                            label={labels.labelStudentPassword}
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
            {students.length > 0 && (
                <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#1976d2" }}>
                                <TableCell sx={{ color: "white" }}>{labels.labelStudentFullName}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelStudentEmail}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelStudentPhone}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelStudentPassword}</TableCell>
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
