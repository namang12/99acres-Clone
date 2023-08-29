import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { DarkTypography, LightTypography } from "../Common";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const citiesList = [
  {
    src1: "assets/HomeCitiesImage/delhi-ncr.jpg",
    text1: "Delhi / NCR",
    text2: "16000+ Properties",
    src2: "assets/HomeCitiesImage/Mumbai.jpg",
    text3: "Mumbai",
    text4: "98000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/bangalore.jpg",
    text1: "Bangalore",
    text2: "48000+ Properties",
    src2: "assets/HomeCitiesImage/hyderabad.jpg",
    text3: "Hyderabad",
    text4: "32000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/pune.jpg",
    text1: "Pune",
    text2: "49000+ Properties",
    src2: "assets/HomeCitiesImage/kolkata.jpg",
    text3: "Kolkata",
    text4: "32000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/chennai.jpg",
    text1: "Chennai",
    text2: "37000+ Properties",
  },
];

const Card = ({ src, text1, text2 }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <img
        src={src}
        alt="citiesImage"
        style={{
          width: "100px",
          height: "98px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box>
        <Typography
          sx={{
            mt: 1,
            ml: 3,
            color: "#041533",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            fontFamily: "Open Sans",
          }}
        >
          {text1}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            ml: 3,
            color: "#8993A4",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            fontFamily: "Open Sans",
          }}
        >
          {text2}
        </Typography>
      </Box>
    </Box>
  );
};

const BottomSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container
      sx={{
        mb: 5,
      }}
    >
      <Box sx={{ mb: 4 }}>
        <LightTypography text={"TOP CITIES"} />
        <DarkTypography
          text1={"Explore Real Estate in Popular Indian Cities"}
          textAlign="left"
        />
      </Box>
      <Carousel responsive={responsive}>
        {citiesList.map((city, index) => (
          <Box key={index}>
            <Card src={city.src1} text1={city.text1} text2={city.text2} />
            {index !== 3 && (
              <Card src={city.src2} text1={city.text3} text2={city.text4} />
            )}
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default BottomSection;
