import React from "react";
import { Navbar } from "../components/HomePage";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar isHome={false} />
      <img
        src="assets/not-found.jpg"
        alt="page not found"
        style={{
          width: "40%",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </Box>
  );
};

export default NotFound;
