import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSearchCity,
  handleSearchOption,
  searchSuggestions,
} from "../../redux/SearchBox/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
const filter = createFilterOptions();

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
  const [value, setValue] = React.useState("");
  const { searchOption, city, suggestions } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (value !== "") {
      dispatch(searchSuggestions(value));
    }
  }, [value]);

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
        <Box sx={{ p: "16px 10px 16px 16px" }}>
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
        <Autocomplete
          value={city}
          onChange={(event, newValue) => dispatch(handleSearchCity(newValue))}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.address
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={suggestions}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.address;
          }}
          renderOption={(props, option) => (
            <li key={option.address} {...props}>
              {option.address}
            </li>
          )}
          sx={{ width: "70%" }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => setValue(e.target.value)}
              variant="standard"
              sx={{ ml: 2, width: "95%", fontFamily: "Open Sans" }}
              placeholder={'"search Noida"'}
            />
          )}
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
