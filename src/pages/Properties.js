import { Box, Breadcrumbs, Container, Grid, Link } from "@mui/material";
import React from "react";
import { Navbar } from "../components/HomePage";
import { useNavigate } from "react-router";
import { FiltersSection } from "../components/PropertiesPage";

const Properties = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      key="1"
      color="#8993A4"
      onClick={() => navigate("/")}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          color: "#8993A4",
        },
        fontSize: "12px",
        fontFamily: "Open Sans",
      }}
    >
      Home
    </Link>,
    <Link
      key="1"
      color="#8993A4"
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          color: "#8993A4",
        },
        fontSize: "12px",
        fontFamily: "Open Sans",
      }}
    >
      Properties
    </Link>,
  ];

  return (
    <Box sx={{ background: "#f4f5f7", minHeight: "100vh" }}>
      <Navbar isHome={false} />
      <Container sx={{ paddingTop: 0.5 }}>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ mt: 9, ml: 1 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item md={3.5}>
            <FiltersSection />
          </Grid>
          <Grid item md={8.5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Properties;
