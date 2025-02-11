import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Admission = ({ admissions }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white" }}>ID</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }}>Phone</TableCell>
            <TableCell sx={{ color: "white" }}>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admissions?.map((admission, index) => (
            <TableRow key={index}>
              <TableCell>{admission.id}</TableCell>
              <TableCell>{admission.name}</TableCell>
              <TableCell>{admission.email}</TableCell>
              <TableCell>{admission.phone}</TableCell>
              <TableCell>{admission.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Admission;
