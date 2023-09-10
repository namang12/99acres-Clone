import React, { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";

const PropertiesListCard = ({ property }) => {
  const [open, setOpen] = useState(false);
  const {
    address,
    city,
    price,
    propertyArea,
    propertyName,
    imageProperty,
    propertyId,
    contactNo,
    email,
  } = property;
  const navigate = useNavigate();

  return (
    <>
      <ContactModal
        open={open}
        setOpen={setOpen}
        contactNo={contactNo}
        email={email}
        propertyName={propertyName}
        price={price}
        propertyArea={propertyArea}
      />
      <Paper
        elevation={1}
        sx={{
          mt: 3,
          borderRadius: 2,
          boxShadow: "0 3px 8px 0 rgba(0,106,194,.2)",
          position: "relative",
        }}
      >
        <img
          src={
            imageProperty === "home"
              ? "assets/propertyTempImage.jpg"
              : imageProperty
          }
          alt="propertyTemp"
          style={{
            borderRadius: 8,
            width: "358px",
            height: "386px",
            objectFit: "cover",
          }}
        />
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            right: 0,
            borderRadius: "8px 0px 0px 8px",
            width: "556px",
            padding: "30px 24px",
            top: 0,
            bottom: 0,
            margin: "auto",
            height: "356px",
            border: "none",
          }}
        >
          <Box>
            <Typography
              onClick={() => navigate(`/properties/${propertyId}`)}
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                cursor: "pointer",
              }}
            >
              3 BHK Serviced Apartment for rent in {address}, {city}
            </Typography>
            <Typography
              onClick={() => navigate(`/properties/${propertyId}`)}
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 700,
                mt: 1,
                color: "#091E42",
                cursor: "pointer",
              }}
            >
              {propertyName}
            </Typography>
            <Box
              onClick={() => navigate(`/properties/${propertyId}`)}
              sx={{ mt: 1, display: "flex", gap: 8, cursor: "pointer" }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    ₹
                    {price >= 1000000
                      ? (price / 1000000).toFixed(1) + "L"
                      : price >= 1000
                      ? (price / 1000).toFixed(1) + "K"
                      : price.toString()}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    /month
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  Desposit 2 month(s) rent
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    {propertyArea}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    sq.ft.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  (229 sq.m.) Super built-up Area
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    3 BHK
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  4 Baths
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                mt: 4,
                color: "#091E42",
                mr: 4,
              }}
            >
              New unused floor on 502 sq yd plot in a premium gated community,
              dlf phase 1, close to the market area with all amenities. Very
              high end construction and finish quality, with top quality
              equipment. Central airconditioning with mitsubishi acs. Separate
              water tank and full power back up. All rooms are very spacious.
              Buil...
            </Typography>
            <Divider sx={{ mt: 3, background: "rgba(0,0,0,0.15)" }} />
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => setOpen(true)}
                disableRipple
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                  fontFamily: "Open Sans",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#0078db",
                  mr: 1,
                  ":hover": {
                    background: "#f0f9ff",
                  },
                }}
              >
                View Phone Number
              </Button>
              <Button
                onClick={() => setOpen(true)}
                disableRipple
                variant="contained"
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                  fontFamily: "Open Sans",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "#0078db",
                  ":hover": {
                    background: "#006ac2",
                  },
                }}
              >
                Contact Owner
              </Button>
            </Box>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default PropertiesListCard;
