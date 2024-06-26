import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchModal } from "../../redux/SearchModal/SearchModalSlice";
import {
  handleSearchCity,
  handleSearchOption,
  searchSuggestions,
} from "../../redux/SearchBox/SearchSlice";
import { Button, Divider, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
const filter = createFilterOptions();

const style = {
  position: "absolute",
  top: "60px",
  left: "30px",
  width: "680px",
  height: "442px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const optionButtons = ["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living"];

export default function SearchModal() {
  const [value, setValue] = React.useState("");
  const { open } = useSelector((store) => store.searchModal);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeSearchModal());
  const { searchOption, city, suggestions } = useSelector(
    (store) => store.search
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value !== "") {
      dispatch(searchSuggestions(value));
    }
  }, [value]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{
                color: "#041533",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "48px",
                fontFamily: "Open Sans",
              }}
            >
              Explore real estate in...
            </Typography>
            <Box sx={{ display: "flex", mt: 4, gap: 3 }}>
              {optionButtons.map((btn, index) => (
                <Button
                  key={index}
                  disableRipple
                  onClick={() => dispatch(handleSearchOption(btn))}
                  sx={{
                    fontFamily: "Open Sans",
                    textTransform: "capitalize",
                    color: searchOption === btn ? "#000" : "#8993A4",
                    fontSize: "14px",
                    fontWeight: 400,
                    borderBottom:
                      searchOption === btn
                        ? "3px solid #005CA8"
                        : "3px solid #fff",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "0 3px 8px 0 rgba(0,106,194,0.2)",
                borderRadius: 1,
              }}
            >
              <Box sx={{ p: "13px 10px 13px 13px" }}>
                <Typography
                  sx={{
                    color: "#253858",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 600,
                    fontFamily: "Open Sans",
                  }}
                >
                  Residential
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
              />
              {/* <TextField
                variant="standard"
                sx={{ ml: 2, width: "70%", fontFamily: "Open Sans" }}
                placeholder={'"search Noida"'}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 2 }} />,
                  disableUnderline: true,
                }}
              /> */}
              <Autocomplete
                value={city}
                onChange={(event, newValue) =>
                  dispatch(handleSearchCity(newValue))
                }
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
              <Divider
                orientation="vertical"
                sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
              />
              <Box sx={{ p: "16px" }}>
                <Button
                  onClick={() => navigate("/properties")}
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    fontFamily: "Open Sans",
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
