import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CarouselComponent from "./CarouselComponent";

const GetStarted = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "Open Sans",
            color: "#8993A4",
          }}
        >
          GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <CarouselComponent />
      </Box>
    </Container>
  );
};

export default GetStarted;
