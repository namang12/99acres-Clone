import { Typography } from "@mui/material";
import React from "react";

const DarkTypography = ({ text1, text2, textAlign = "center" }) => {
  return (
    <Typography
      sx={{
        mt: 1,
        color: "#041533",
        textAlign: textAlign,
        fontSize: "36px",
        fontWeight: 700,
        lineHeight: "52px",
        fontFamily: "Open Sans",
      }}
    >
      {text1} <br /> {text2}
    </Typography>
  );
};

export default DarkTypography;
