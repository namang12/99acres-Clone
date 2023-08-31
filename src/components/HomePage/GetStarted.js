import { Box, Container } from "@mui/material";
import React from "react";
import CarouselComponent from "./CarouselComponent";
import { LightTypography } from "../Common";

const GetStarted = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LightTypography
          text={"GET STARTED WITH EXPLORING REAL ESTATE OPTIONS"}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <CarouselComponent />
      </Box>
    </Container>
  );
};

export default GetStarted;
