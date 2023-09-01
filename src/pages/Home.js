import React from "react";
import { useState } from "react";
// import Modal from "react-responsive-modal";
import Backdrop from "@mui/material/Backdrop";

import { Modal } from "@mui/material";
import LoginForm from "../components/LoginSignUp/LoginForm";
import SignUpForm from "../components/LoginSignUp/SignUpForm";
// import "../components/HomePage/Modal.css";
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

import Footer from "../components/ListingPage/Footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",

  boxShadow: 24,
};

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const openModal = () => {
    console.log("open");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const switchToSignUp = () => {
    setShowLogin(false);
  };
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
        <Navbar openModal={openModal} />
        <img
          src="assets/nav-home.jpg"
          alt="nav-home"
          style={{ maxHeight: "45vh", objectFit: "cover", width: "100%" }}
        />
        <SearchBox />
      </Box>
      <SearchModal />
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalIsOpen}
          onClose={closeModal}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Box sx={style}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            {showLogin ? (
              <LoginForm
                closeModal={closeModal}
                switchToSignUp={switchToSignUp}
              />
            ) : (
              <SignUpForm
                closeModal={closeModal}
                switchToLogin={switchToLogin}
              />
            )}
          </Box>
        </Modal>
      </div>
      <GetStarted />
      <MiddleSection />
      <BottomSection />
      <Footer />
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
    </>
  );
};

export default Home;
