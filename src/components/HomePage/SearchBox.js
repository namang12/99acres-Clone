import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchOption } from "../../redux/SearchBox/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";

const optionButtons = [
  "Buy",
  "Rent",
  "PG / Co-living",
  "Commercial",
  "Coworking",
  "Plots/Land",
  "Projects",
];

const SearchBox = () => {
  const { searchOption } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  return (
    <Paper
      elevation={5}
      sx={{
        background: "#fff",
        borderRadius: "15px",
        width: "60%",
        position: "absolute",
        bottom: 0,
        p: "16px 0px 0px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: "0px 16px",
        }}
      >
        {optionButtons.map((btn, index) => (
          <Button
            key={index}
            disableRipple
            onClick={() => dispatch(handleSearchOption(btn))}
            sx={{
              fontFamily: "Open Sans",
              textTransform: "capitalize",
              color: searchOption === btn ? "#000" : "#42526E",
              fontSize: "16px",
              fontWeight: 600,
              borderBottom:
                searchOption === btn ? "3px solid #005CA8" : "3px solid #fff",
              borderRadius: 0,
              ":hover": {
                background: "#fff",
              },
              paddingBottom: 2,
            }}
          >
            {btn}
          </Button>
        ))}
      </Box>
      <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: "16px 16px 16px 16px" }}>
          <Typography
            sx={{
              color: "#42526E",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "Open Sans",
            }}
          >
            All Residential
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
        />
        <TextField
          variant="standard"
          sx={{ ml: 2, width: "70%", fontFamily: "Open Sans" }}
          placeholder={'"search Noida"'}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 2 }} />,
            disableUnderline: true,
          }}
        />
        <Box sx={{ p: "16px" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              fontWeight: 700,
              fontFamily: "Open Sans",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchBox;
