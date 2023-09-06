import React, { useState } from "react";
import "./PostPropertyForm.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";

const PostPropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    propertyOption: "",
    type: "",
    image: null,
    area: "",
    address: "",
    city: "",
    state: "",
    price: "",
    phoneNumber: "",
    emailid: "",
  });

  const {
    propertyOption,
    type,
    image,
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
    setPropertyData({ ...propertyData, image: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("propertyOption", propertyOption);
    formData.append("type", type);
    formData.append("image", image);
    formData.append("area", area);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("price", price);
    formData.append("phoneNumber", phoneNumber);
    formData.append("emailid", emailid);
    try {
      const response = await axios.post(
        "http://localhost:5000/propertyData",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="div-postform">
      <div className="div-postproperty-6">
        <form onSubmit={(e) => onSubmit(e)}>
          <p className="text-wrapper-9">
            Start posting your property, it’s free
          </p>
          <div className="text-wrapper-10">Add Basic Details</div>

          <div className="div-page-ppf">
            {/* Property Options Radio */}
            <div className="div-hd-d">
              <div className="text-wrapper-11">You're looking to ...</div>
              <div className="radiobutton-postform">
                <input
                  type="radio"
                  name="propertyOption"
                  value={"Sell"}
                  id="sell"
                  onChange={(e) => onInputChange(e)}
                />
                <label htmlFor="sell">Sell</label>

                <input
                  type="radio"
                  name="propertyOption"
                  value={"Rent/Lease"}
                  id="Rent/Lease"
                  onChange={(e) => onInputChange(e)}
                />
                <label htmlFor="Rent/Lease">Rent/Lease</label>

                <input
                  type="radio"
                  name="propertyOption"
                  value={"PG"}
                  id="PG"
                  onChange={(e) => onInputChange(e)}
                />
                <label htmlFor="PG">PG</label>
              </div>
            </div>

            {/* Property Type Radio */}
            <div className="div-hd-a">
              <div className="text-wrapper-11">And it's a ...</div>

              <div style={{ display: "flex" }}>
                <div className="radiobutton-postform">
                  <input
                    type="radio"
                    name="type"
                    value={"Flat"}
                    id="Flat"
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="Flat">Flat</label>

                  <input
                    type="radio"
                    name="type"
                    value={"Villa"}
                    id="Villa"
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="Villa">Villa</label>

                  <input
                    type="radio"
                    name="type"
                    value={"Land"}
                    id="Land"
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="Land">Land</label>
                </div>

                <div className="div-uploadimage">
                  <Button variant="contained" component="label">
                    Upload Photo
                    <input type="file" hidden onChange={handleImage} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Area */}
            <div className="div-inpfields" style={{ marginTop: "7px" }}>
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
            <div className="div-inpfields">
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

            <div className="div-inpfields">
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
            <div className="div-inpfields">
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
        </form>
      </div>
    </div>
  );
};

export default PostPropertyForm;
