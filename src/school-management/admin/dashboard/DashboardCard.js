import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card sx={{ minWidth: 200, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Box ml={2}>
            <Typography variant="h6" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
