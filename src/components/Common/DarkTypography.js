import { Typography } from "@mui/material";
import React from "react";

const DarkTypography = ({
  text1,
  text2,
  textAlign = "center",
  color = "#041533",
}) => {
  return (
    <Typography
      sx={{
        mt: 1,
        color: color,
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
