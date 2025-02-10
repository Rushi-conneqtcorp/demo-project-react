import React from "react";
import { useSelector } from 'react-redux';
import { Grid, Container } from "@mui/material";
import DashboardCard from "./DashboardCard";


const Dashboard = ({ admissionCount }) => {
  const studentCount = useSelector(state => state.students.students.length);
  const teacherCount = useSelector(state => state.teachers.teachers.length);
  const subjectCount = useSelector(state => state.subjects.subjects.length);
  return (
    <Container>
      <Grid container spacing={3} mt={4}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Students" value={studentCount} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Teachers" value={teacherCount} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Admissions" value={admissionCount} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Subjects" value={subjectCount} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
