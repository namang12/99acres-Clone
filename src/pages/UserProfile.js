import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
import React from "react";
import { Navbar } from "../components/HomePage";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <>
      <Navbar isHome={false} />
      <Container sx={{ mt: 15 }} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            textTransform="capitalize"
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "17px",
              color: "#000",
            }}
          >
            User Profile
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { lg: "row", xs: "column", md: "row" },
          }}
        >
          <Grid container spacing={4}>
            <Grid item md={4.5} xs={12}>
              <Paper
                variant="outlined"
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  style={{ borderRadius: "50%", border: "1px solid #000" }}
                  src="/assets/avatar.jpg"
                  alt="User Profile Avatar"
                />
              </Paper>
            </Grid>
            <Grid item md={7} xs={12}>
              <Paper
                variant="outlined"
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  mt: { lg: 0, md: 0, xs: 3 },
                  mb: { lg: 0, md: 0, xs: 4 },
                  position: "relative",
                }}
              >
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Grid
                    item
                    md={5.5}
                    xs={12}
                    sx={{ mb: { lg: 4, md: 4, xs: 1 }, mt: 2 }}
                  >
                    <TextField
                      id="Name"
                      label="Name"
                      defaultValue={user?.data?.userName}
                      sx={{ width: "100%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    md={5.5}
                    xs={12}
                    sx={{ mb: { lg: 0, md: 0, xs: 2 }, mt: 2 }}
                  >
                    <TextField
                      id="Contact No."
                      label="Contact No."
                      sx={{ width: "100%" }}
                      defaultValue={user?.data?.contactNo}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    md={11.5}
                    xs={12}
                    sx={{
                      mb: { lg: 8, md: 8, xs: 10 },
                      alignItems: "left",
                    }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      defaultValue={user?.data?.email}
                      sx={{ width: "100%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;
