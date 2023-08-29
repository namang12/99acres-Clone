import React from "react";
import { Box } from "@mui/material";
import { GetStarted, Navbar, SearchBox } from "../components/HomePage";

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
          style={{ maxHeight: "45vh" }}
        />
        <SearchBox />
      </Box>
      <GetStarted />
    </>
  );
};

export default Home;
