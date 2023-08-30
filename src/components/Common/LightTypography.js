import { Typography } from "@mui/material";
import React from "react";

const LightTypography = ({ text, fontSize = "12px" }) => {
  return (
    <Typography
      sx={{
        fontSize: fontSize,
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
