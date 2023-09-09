import React, { useState } from "react";
import "./PostPropertyForm.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const PostPropertyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [propertyData, setPropertyData] = useState({
    propertyOption: "",
    type: "",
    area: "",
    propertyName: "",
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
    area,
    propertyName,
    address,
    city,
    state,
    price,
    phoneNumber,
    emailid,
  } = propertyData;

  const [base64Image, setBase64Image] = useState(null);

  const onInputChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
    console.log(propertyData);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target.result;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("PropertyOptions", propertyOption);
    formData.append("PropertyType", type);
    formData.append("PropertyArea", area);
    formData.append("PropertyName", propertyName);
    formData.append("Address", address);
    formData.append("City", city);
    formData.append("State", state);
    formData.append("Price", price);
    formData.append("ContactNo", phoneNumber);
    formData.append("Email", emailid);
    formData.append("ImageProperty", base64Image);
    const user = getUserFromLocalStorage();
    try {
      const response = await axios.post(
        "https://localhost:7046/api/PostForm/PostProperty",
        formData,
        {
          headers: {
            "Authorization": `Bearer ${user.userToken.jwtToken}`,
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-wrapper-9">
            Start posting your property, it’s free
          </p>
          <div className="text-wrapper-10">Add Basic Details</div>

          <div className="div-page-ppf">
            {/* Property Options Radio */}
            <div className="div-hd-d">
              <div className="text-wrapper-11">
                You're looking to...&nbsp;&nbsp;{" "}
                {errors.propertyOption && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    (Required)
                  </span>
                )}
              </div>
              <div className="radiobutton-postform">
                <input
                  {...register("propertyOption", { required: true })}
                  type="radio"
                  name="propertyOption"
                  value={"Sell"}
                  id="sell"
                  onChange={(e) => onInputChange(e)}
                />
                <label htmlFor="sell">Sell</label>

                <input
                  {...register("propertyOption", { required: true })}
                  type="radio"
                  name="propertyOption"
                  value={"Rent/Lease"}
                  id="Rent/Lease"
                  onChange={(e) => onInputChange(e)}
                />
                <label htmlFor="Rent/Lease">Rent/Lease</label>

                <input
                  {...register("propertyOption", { required: true })}
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
              <div className="text-wrapper-11">
                And it's a...&nbsp;&nbsp;{" "}
                {errors.type && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    (Required)
                  </span>
                )}
                {errors.image && (
                  <span
                    style={{
                      fontSize: "10px",
                      color: "red",
                      marginLeft: errors.type ? "50px" : "112px",
                    }}
                  >
                    Image is Required(only JPG/PNG)
                  </span>
                )}
              </div>

              <div style={{ display: "flex" }}>
                <div className="radiobutton-postform">
                  <input
                    {...register("type", { required: true })}
                    type="radio"
                    name="type"
                    value={"Flat"}
                    id="Flat"
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="Flat">Flat</label>

                  <input
                    {...register("type", { required: true })}
                    type="radio"
                    name="type"
                    value={"Villa"}
                    id="Villa"
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="Villa">Villa</label>

                  <input
                    {...register("type", { required: true })}
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
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      accept="image/png, image/jpeg"
                      hidden
                      onChange={handleImage}
                    />
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Area */}
            <div className="div-inpfields" style={{ marginTop: "7px" }}>
              <TextField
                {...register("area", { valueAsNumber: true, required: true })}
                className="area-inp"
                id="standard-basic"
                type="number"
                placeholder={errors.area ? "This Field is Required" : ""}
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
                    fontWeight: errors.area ? "500" : "600",
                    color: errors.area ? "red" : "#091e42",
                  },
                }}
              />
              <div className="area-unit">in Sq. Feet</div>
            </div>

            {/* Name of Property */}
            <div className="div-inpfields">
              <TextField
                {...register("propertyName", { required: true })}
                className="address-inp"
                id="standard-basic"
                placeholder={errors.propertyName ? "This Field is Required" : ""}
                label="Name of Property"
                variant="standard"
                size="medium"
                name="propertyName"
                value={propertyName}
                onChange={(e) => onInputChange(e)}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica",
                    fontWeight: errors.propertyName ? "500" : "600",
                    color: errors.propertyName ? "red" : "#091e42",
                  },
                }}
              />
            </div>

            {/* Address */}
            <div className="div-inpfields">
              <TextField
                {...register("address", { required: true })}
                className="address-inp"
                id="standard-basic"
                placeholder={errors.address ? "This Field is Required" : ""}
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
                    fontWeight: errors.address ? "500" : "600",
                    color: errors.address ? "red" : "#091e42",
                  },
                }}
              />
            </div>

            <div className="div-inpfields">
              <TextField
                {...register("city", { required: true })}
                className="city-inp"
                id="standard-basic"
                placeholder={errors.city ? "This Field is Required" : ""}
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
                    fontWeight: errors.city ? "500" : "600",
                    color: errors.city ? "red" : "#091e42",
                  },
                }}
              />
              <TextField
                {...register("state", { required: true })}
                className="state-inp"
                id="standard-basic"
                placeholder={errors.state ? "This Field is Required" : ""}
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
                    fontWeight: errors.state ? "500" : "600",
                    color: errors.state ? "red" : "#091e42",
                  },
                }}
              />
            </div>

            {/* Price */}
            <div className="div-inpfields">
              <TextField
                {...register("price", {valueAsNumber:true, required: true })}
                className="price-inp"
                id="standard-basic"
                type="number"
                placeholder={errors.price ? "This Field is Required" : ""}
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
                    fontWeight: errors.price ? "500" : "600",
                    color: errors.price ? "red" : "#091e42",
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
                  {...register("phoneNumber", {
                    valueAsNumber: true,
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                  })}
                  className="phone-inp"
                  id="outlined-basic"
                  type="number"
                  placeholder={
                    errors.phoneNumber
                      ? "Please enter a Valid 10 Digit Phone Number"
                      : ""
                  }
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => onInputChange(e)}
                  InputLabelProps={
                    errors.phoneNumber
                      ? {
                          style: {
                            fontSize: "14px",
                            fontFamily: "Helvetica",
                            fontWeight: "500",
                            color: "red",
                          },
                        }
                      : {
                          style: {
                            color: "#091e42",
                          },
                        }
                  }
                />
                <TextField
                  {...register("emailid", { required: true })}
                  className="email-inp"
                  id="outlined-basic"
                  type="email"
                  placeholder={errors.emailid ? "This Field is Required" : ""}
                  label="Email ID"
                  variant="outlined"
                  name="emailid"
                  value={emailid}
                  onChange={(e) => onInputChange(e)}
                  InputLabelProps={
                    errors.emailid
                      ? {
                          style: {
                            fontSize: "14px",
                            fontFamily: "Helvetica",
                            fontWeight: "500",
                            color: "red",
                          },
                        }
                      : {
                          style: {
                            color: "#091e42",
                          },
                        }
                  }
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
