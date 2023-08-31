import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar({openModal}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "#005CA8" : "none",
          boxShadow: "none",
          transition: "0.5s ease",
        }}
      >
        <Toolbar>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            99acres
          </Typography>

          <div>
            <Button
              disableRipple
              onClick={() => navigate("/postproperty")}
              variant="contained"
              sx={{
                textTransform: "none",
                mr: 2,
                background: "#fff",
                color: "#000",
                borderRadius: "10px",
                fontWeight: 600,
                fontFamily: "Open Sans",
                p: "3px 16px",
                ":hover": {
                  background: "#fff",
                  color: "#000",
                },
              }}
            >
              Post property
              <Chip
                color="success"
                size="small"
                label="Free"
                sx={{
                  ml: 1,
                  borderRadius: "4px",
                  p: 0,
                  textTransform: "uppercase",
                  fontSize: "10px",
                  height: "17px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >


              <MenuItem onClick={openModal}>Login / Register</MenuItem>



              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
