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
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function Navbar({ openModal, isHome = true }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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

  const handlePostProperty = () => {
    if (user) {
      navigate("/postproperty");
    } else {
      openModal();
      enqueueSnackbar("Login to post a property", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "#005CA8" : isHome ? "none" : "#005CA8",
          boxShadow: "none",
          transition: "0.5s ease",
        }}
      >
        <Toolbar>
          <Typography
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            99acres
          </Typography>

          <div>
            <Button
              disableRipple
              onClick={handlePostProperty}
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
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!user && (
                <MenuItem onClick={openModal}>Login / Register</MenuItem>
              )}
              {user && <MenuItem onClick={handleClose}>Profile</MenuItem>}
              {user && <MenuItem onClick={handleClose}>Logout</MenuItem>}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
