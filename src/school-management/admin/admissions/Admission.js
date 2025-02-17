import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import labels from "../../utility/labels";

const Admission = ({ admissions }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white" }}>{labels.labelAdmissionID}</TableCell>
            <TableCell sx={{ color: "white" }}>{labels.labelAdmissionName}</TableCell>
            <TableCell sx={{ color: "white" }}>{labels.labelAdmissionEmail}</TableCell>
            <TableCell sx={{ color: "white" }}>{labels.LabelAdmissionPhone}</TableCell>
            <TableCell sx={{ color: "white" }}>{labels.labelAdmissionMessage}</TableCell>
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
