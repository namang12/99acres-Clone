import React from "react";
import { Box } from "@mui/material";
import {
  BottomSection,
  GetStarted,
  MiddleSection,
  Navbar,
  SearchBox,
} from "../components/HomePage";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          minHeight: "55vh",
        }}
      >
        <Navbar />
        <img
          src="assets/nav-home.jpg"
          alt="nav-home"
          style={{ maxHeight: "45vh", objectFit: "cover", width: "100%" }}
        />
        <SearchBox />
      </Box>
      <GetStarted />
      <MiddleSection />
      <BottomSection />
    </>
  );
};

export default Home;
