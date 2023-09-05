import { Box, Typography } from "@mui/material";
import React from "react";
import PropertiesListCard from "./PropertiesListCard";

const PropertiesListSection = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: 600,
          color: "#091E42",
          fontFamily: "Open Sans",
        }}
      >
        12097 results | Property for Rent in Gurgaon
      </Typography>

      {[1, 2, 3, 4, 5].map((cards) => (
        <PropertiesListCard />
      ))}
    </Box>
  );
};

export default PropertiesListSection;
