import React, { useState } from "react";
import {
    Container, TextField, Button, Typography, Box, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { addSubject } from '../../redux/subjectSlice';
import labels from "../../utility/labels";
import messages from "../../utility/messages";

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
        tempErrors.subjectName = formData.subjectName ? "" : messages.subjectName;
        tempErrors.description = formData.description ? "" : messages.subjectDescription;

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(messages.registrationSuccess);
            dispatch(addSubject({ ...formData }));
            setFormData({ subjectName: "", description: "" });
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 5 }}>
            <Paper elevation={10} sx={{ padding: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    {labels.labelAddSubject}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label={labels.labelSubjectName}
                            variant="outlined"
                            name="subjectName"
                            fullWidth
                            value={formData.subjectName}
                            onChange={handleChange}
                            error={!!errors.subjectName}
                            helperText={errors.subjectName}
                        />
                        <TextField
                            label={labels.labelSubjectDescription}
                            variant="outlined"
                            name="description"
                            fullWidth
                            value={formData.description}
                            onChange={handleChange}
                            error={!!errors.description}
                            helperText={errors.description}
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            {labels.btnAddSubject}
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
                                <TableCell sx={{ color: "white" }}>{labels.labelSubjectName}</TableCell>
                                <TableCell sx={{ color: "white" }}>{labels.labelSubjectDescription}</TableCell>
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
