import React, { useState } from "react";
import "./PostPropertyForm.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";

const PostPropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    propertyOption: "",
    type: "",
    area: "",
    address: "",
    city: "",
    state: "",
    price: "",
    phoneNumber: "",
    emailid: "",
  });

  const [image, setImage] = useState();
  const formData = new FormData();

  const {
    propertyOption,
    type,
    area,
    address,
    city,
    state,
    price,
    phoneNumber,
    emailid,
  } = propertyData;

  const onInputChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
    console.log(propertyData);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    formData.append("photo", image);
    setPropertyData({ ...propertyData, photo: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/propertyData", propertyData);
  };

  return (
    <div className="container-1">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="div-postproperty-6">
          <p className="text-wrapper-9">
            Start posting your property, it’s free
          </p>
          <div className="text-wrapper-10">Add Basic Details</div>
          <div className="div-page-ppf">
            {/* Property Options Radio */}
            <div className="div-hd-d">
              <div className="div-collapsewidget">
                <div className="text-wrapper-11">You're looking to ...</div>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="propertyOption"
                    value={"Sell"}
                    onChange={(e) => onInputChange(e)}
                    className="r1"
                  />
                  <span className="sp1">Sell</span>
                </label>
                <label className="l2">
                  <input
                    type="radio"
                    name="propertyOption"
                    value={"Rent/Lease"}
                    onChange={(e) => onInputChange(e)}
                    className="r2"
                  />
                  <span className="sp2">Rent/Lease</span>
                </label>
                <label className="l3">
                  <input
                    type="radio"
                    name="propertyOption"
                    value={"PG"}
                    onChange={(e) => onInputChange(e)}
                    className="r3"
                  />
                  <span className="sp3">PG</span>
                </label>
              </div>
            </div>

            {/* Property Type Radio */}
            <div className="div-hd-a">
              <div className="and-it-s-a-wrapper">
                <div className="text-wrapper-11">And it's a ...</div>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={"Flat"}
                    onChange={(e) => onInputChange(e)}
                    className="type-r1"
                  />
                  <span className="type-sp1">Flat</span>
                </label>
                <label className="type-l2">
                  <input
                    type="radio"
                    name="type"
                    value={"Villa"}
                    onChange={(e) => onInputChange(e)}
                    className="type-r2"
                  />
                  <span className="type-sp2">Villa</span>
                </label>
                <label className="type-l3">
                  <input
                    type="radio"
                    name="type"
                    value={"Land"}
                    onChange={(e) => onInputChange(e)}
                    className="type-r3"
                  />
                  <span className="type-sp3">Land</span>
                </label>

                <Button
                  variant="contained"
                  component="label"
                  className="image-upload"
                >
                  Upload Photo
                  <input type="file" hidden onChange={handleImage} />
                </Button>
              </div>
            </div>

            {/* Property Area */}
            <div className="div-hd-b">
              <TextField
                className="area-inp"
                id="standard-basic"
                label="Total Area of Property is"
                variant="standard"
                size="small"
                name="area"
                value={area}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#091e42",
                  },
                }}
              />
              <div className="area-unit">in Sq. Feet</div>
            </div>

            {/* Address */}
            <div className="div-hd-c">
              <TextField
                className="address-inp"
                id="standard-basic"
                label="Address of Property"
                variant="standard"
                size="medium"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#091e42",
                  },
                }}
              />
            </div>
            <div className="div-hd-e">
              <TextField
                className="city-inp"
                id="standard-basic"
                label="City"
                variant="standard"
                size="medium"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#091e42",
                  },
                }}
              />
              <TextField
                className="state-inp"
                id="standard-basic"
                label="State"
                variant="standard"
                size="medium"
                name="state"
                value={state}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#091e42",
                  },
                }}
              />
            </div>

            {/* Price */}
            <div className="div-hd-f">
              <TextField
                className="price-inp"
                id="standard-basic"
                label="Price of the Property"
                variant="standard"
                size="medium"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#091e42",
                  },
                }}
              />
              <div className="price-unit">in INR</div>
            </div>

            {/* Contact */}
            <div className="div-widgetbox-white">
              <p className="text-wrapper-17">
                Your contact details for the buyer to reach you
              </p>
              <div className="contact-wrapper">
                <TextField
                  className="phone-inp"
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => onInputChange(e)}
                  sx={{ borderColor: "#ebecf0" }}
                />
                <TextField
                  className="email-inp"
                  id="outlined-basic"
                  label="Email ID"
                  variant="outlined"
                  name="emailid"
                  value={emailid}
                  onChange={(e) => onInputChange(e)}
                />

                <Button
                  type="submit"
                  name="submit button"
                  className="submit-btn"
                  variant="contained"
                  size="large"
                >
                  Post Property
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostPropertyForm;
