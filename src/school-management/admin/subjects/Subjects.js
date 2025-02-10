import React, { useState } from "react";
import {
    Container, TextField, Button, Typography, Box, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { addSubject } from '../../redux/subjectSlice';

const Subjects = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        subjectName: "",
        description: ""
    });
    const subjects = useSelector(state => state.subjects.subjects); //reducer assign value
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.subjectName = formData.subjectName ? "" : "Subject Name is required!";
        tempErrors.description = formData.description ? "" : "Description is required!";

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registration Successful! ✅");
            dispatch(addSubject({ ...formData }));
            setFormData({ subjectName: "", description: "" });
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 5 }}>
            <Paper elevation={10} sx={{ padding: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Add Subject
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label="Subject Name"
                            variant="outlined"
                            name="subjectName"
                            fullWidth
                            value={formData.subjectName}
                            onChange={handleChange}
                            error={!!errors.subjectName}
                            helperText={errors.subjectName}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            name="description"
                            fullWidth
                            value={formData.description}
                            onChange={handleChange}
                            error={!!errors.description}
                            helperText={errors.description}
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Add Subject
                        </Button>
                    </Box>
                </form>
            </Paper>
            {/* Display Data in Table */}
            {subjects.length > 0 && (
                <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#1976d2" }}>
                                <TableCell sx={{ color: "white" }}>Subject Name</TableCell>
                                <TableCell sx={{ color: "white" }}>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subjects.map((subject, index) => (
                                <TableRow key={index}>
                                    <TableCell>{subject.subjectName}</TableCell>
                                    <TableCell>{subject.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </Container>
    );
};

export default Subjects;
