import { Typography } from "@mui/material";
import React from "react";

const LightTypography = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: "12px",
        fontWeight: 700,
        fontFamily: "Open Sans",
        color: "#8993A4",
      }}
    >
      {text}
    </Typography>
  );
};

export default LightTypography;
