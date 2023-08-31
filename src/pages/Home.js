import * as React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import {
  BottomSection,
  GetStarted,
  MiddleSection,
  Navbar,
  SearchBox,
  SearchModal,
} from "../components/HomePage";
import StraightSharpIcon from "@mui/icons-material/StraightSharp";

import Footer from "../components/ListingPage/Footer"

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 100,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Home = (props) => {
  return (
    <>
      <Box
        id="back-to-top-anchor"
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
      <SearchModal />

      <GetStarted />
      <MiddleSection />
      <BottomSection />
      <ScrollTop {...props}>
        <Fab
          disableRipple
          size="small"
          aria-label="scroll back to top"
          sx={{
            background: "#D6EFFF",
            ":hover": { background: "#D6EFFF" },
            boxShadow: "none",
            padding: "25px",
          }}
        >
          <StraightSharpIcon sx={{ color: "#0078db", fontSize: "20px" }} />
        </Fab>
      </ScrollTop>
      <Footer/>
    </>
  );
};

export default Home;
