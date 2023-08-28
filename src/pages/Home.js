import React from "react";
import Navbar from "../components/HomePage/Navbar";
import { Box } from "@mui/material";
import SearchBox from "../components/HomePage/SearchBox";

const Home = () => {
  return (
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
  );
};

export default Home;
