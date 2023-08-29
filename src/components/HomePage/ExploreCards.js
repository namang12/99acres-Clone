import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DarkTypography, LightTypography } from "../Common";

const ExploreCards = ({
  id,
  imageSrc,
  lightText,
  titleText1,
  titleText2,
  sublineText1,
  sublineText2,
  btnText,
}) => {
  return (
    <>
      {id === 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <LightTypography text={"ARE YOU AN OWNER?"} />
          <DarkTypography
            text1={"Sell or Rent your property faster"}
            text2={"with 99acres"}
          />
        </Box>
      )}
      <Box sx={{ mt: 4, display: "flex", alignItems: "center", mb: 3 }}>
        <img
          src={imageSrc}
          alt="exploreImage"
          style={{ borderRadius: "8px" }}
        />
        <Box sx={{ ml: 8 }}>
          <LightTypography text={lightText} />
          <Typography
            sx={{
              mt: 1,
              color: "#091E42",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "40px",
              fontFamily: "Open Sans",
            }}
          >
            {titleText1} <br /> {titleText2}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#42526E",
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Open Sans",
            }}
          >
            {sublineText1} <br /> {sublineText2}
          </Typography>
          <Button
            disableRipple
            sx={{
              mt: 3,
              background: "#0078DB",
              padding: "16px 24px",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Open Sans",
              textTransform: "capitalize",
            }}
          >
            {btnText}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ExploreCards;
