import React, { useEffect, useState } from "react";
import "./propertybyid.css";
import { Navbar } from "../HomePage";
import Footer from "../ListingPage/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, LinearProgress, CircularProgress } from "@mui/material";
import GoToTop from "../PlanPage/GoToTop";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import ContactModal from "../PropertiesPage/ContactModal";

export const SingleP = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [propData, setPropData] = useState({
    propertyId: "",
    propertyName: "",
    propertyOptions: "",
    propertyType: "",
    propertyArea: "",
    address: "",
    city: "",
    state: "",
    price: "",
    contactNo: "",
    email: "",
    imageProperty: "",
  });

  const [bhk, setbhk] = useState();

  const {
    propertyId,
    propertyName,
    propertyOptions,
    propertyType,
    propertyArea,
    address,
    city,
    state,
    price,
    contactNo,
    email,
    imageProperty,
  } = propData;

  const { user } = useSelector((store) => store.user);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleContactModalOpen = () => {
    if (!user) {
      enqueueSnackbar("Login to view owner details", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      setOpen(true);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    loadProperty();
    // setIsLoading(false);
  }, [bhk]);

  const loadProperty = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/PostForm/GetProperty?propertyId=${id}`
    );
    setPropData(result.data.propertyData);
    console.log(result.data.propertyData);

    if (propertyArea < 750) {
      setbhk(1);
    } else if (propertyArea >= 750 && propertyArea < 1500) {
      setbhk(2);
    } else if (propertyArea >= 1500 && propertyArea < 2500) {
      setbhk(3);
    } else if (propertyArea >= 2500 && propertyArea < 4000) {
      setbhk(4);
    } else if (propertyArea >= 4000 && propertyArea < 5400) {
      setbhk(5);
    } else if (propertyArea >= 5400 && propertyArea < 7000) {
      setbhk(6);
    } else if (propertyArea >= 7000) {
      setbhk(7);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="progressbar">
          <GoToTop />
          <LinearProgress />
        </div>
      ) : (
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
          <div className="div-singlepropbyid">
            <div className="www-acres-com-by">
              <div className="section">
                <div className="div-pd">
                  <div className="div-2">
                    <div className="text-wrapper">Home&nbsp;›&nbsp;</div>
                    <div className="text-wrapper">
                      Property in {city}&nbsp;›&nbsp;
                    </div>
                    <div className="text-wrapper">
                      {propertyType} in {city}&nbsp;›&nbsp;
                    </div>
                    <div className="text-wrapper">
                      {propertyType} in {address}&nbsp;›&nbsp;
                    </div>
                    <p className="text-wrapper">1 BHK Flats in {address}</p>
                  </div>

                  <div className="div-component">
                    <div className="overlap">
                      <div className="div-component-2">
                        <div className="overlap-group">
                          <div className="text-wrapper-8">₹</div>
                          <div className="text-wrapper-9">
                            {price / 1000}.0K
                          </div>
                        </div>
                        <div className="overlap-2">
                          <div className="text-wrapper-10">@</div>
                          <div className="text-wrapper-11">
                            {(price / propertyArea).toFixed(1)}
                            &nbsp;per&nbsp;sq.ft.
                          </div>
                        </div>
                        <div className="text-wrapper-12"></div>
                      </div>
                      <div className="heading">
                        <div className="div-component-3">
                          <div className="overlap-3">
                            <div className="text-wrapper-15">{bhk}</div>
                            <div className="text-wrapper-16">BHK</div>
                          </div>
                          <div className="overlap-group-2">
                            <div className="text-wrapper-15">
                              {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk}
                            </div>
                            <div className="text-wrapper-16">Baths</div>
                          </div>
                          <div className="text-wrapper-17">
                            {propertyType} for {propertyOptions}
                          </div>
                        </div>
                        <div className="pseudo" />
                        <div className="span-component-2">
                          <p className="p">
                            in {propertyName}, {address}, {city}, {state}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={handleContactModalOpen}
                        name="contact-button"
                        className="contact-btn"
                        variant="contained"
                        size="large"
                      >
                        Contact Owner
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="div-3">
                <div className="div-4">
                  <div className="div-component-5">
                    <div className="div-overviewcarousel">
                      <img
                        className="propimg"
                        alt="propimg"
                        src={imageProperty}
                      />
                    </div>
                  </div>

                  <div className="table-body">
                    <div className="row">
                      <div className="data">
                        <div className="div-component-7">
                          <img
                            className="img-2"
                            alt="I pd iconpd"
                            src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--iconpd@2x.png"
                          />
                          <div className="text-wrapper-28">Area</div>
                        </div>
                        <div className="div-factarea">
                          <div className="text-wrapper-29">Carpet area:</div>
                          <div className="text-wrapper-30">
                            {propertyArea}.0
                          </div>
                          <div className="text-wrapper-31">
                            {(propertyArea * 0.092903).toFixed(1)} sq. mt.
                          </div>
                          <div className="link-2">
                            <div className="text-wrapper-32">sq.ft.</div>
                          </div>
                        </div>
                      </div>
                      <div className="data">
                        <div className="div-component-7">
                          <img
                            className="img-2"
                            alt="I pd iconpd"
                            src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--iconpd-1@2x.png"
                          />
                          <div className="text-wrapper-28">Configuration</div>
                        </div>
                        <div className="div-component-8">
                          <div className="text-wrapper-33">{bhk} Bedroom</div>
                          <div className="text-wrapper-34">,</div>
                          <div className="overlap-group-4">
                            <div className="text-wrapper-35">
                              {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk}{" "}
                              Bathrooms
                            </div>
                            <div className="text-wrapper-36">,</div>
                          </div>
                          <div className="text-wrapper-37">
                            {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk}{" "}
                            Balcony
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="data">
                        <div className="div-component-7">
                          <img
                            className="img-2"
                            alt="I pd iconpd"
                            src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--iconpd-2@2x.png"
                          />
                          <div className="text-wrapper-28">Price</div>
                        </div>
                        <div className="div-component-9">
                          <div className="text-wrapper-29">₹</div>
                          <p className="element-lac-govt-charges">
                            {price} + Govt Charges &amp; Tax
                          </p>
                          <div className="text-wrapper-38">
                            @ {(price / propertyArea).toFixed(1)} per sq.ft.
                          </div>
                          <div className="small-negotiable">(Negotiable)</div>
                        </div>
                      </div>
                      <div className="data">
                        <div className="div-component-7">
                          <img
                            className="img-2"
                            alt="I pd iconpd"
                            src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--iconpd-3@2x.png"
                          />
                          <div className="text-wrapper-28">Address</div>
                        </div>
                        <div className="kris-apartment-wrapper">
                          <p className="kris-apartment">
                            {propertyName}, {address}
                            <br />
                            {city}, {state}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                </div>

                <div className="div-pd-2">
                  <p className="text-wrapper-44">
                    Why should you consider this property?
                  </p>
                  <div className="div-reasontobuy-pd">
                    <div className="div-6">
                      <div className="text-wrapper-45">North-East Facing</div>
                    </div>
                    <div className="div-7">
                      <div className="text-wrapper-45">Ground Floor</div>
                    </div>
                    <div className="div-8">
                      <div className="text-wrapper-45">Close to School</div>
                    </div>
                    <div className="div-9">
                      <div className="text-wrapper-45">Close to Hospital</div>
                    </div>
                    <div className="div-10">
                      <div className="text-wrapper-45">24*7 Water</div>
                    </div>
                    <div className="div-11">
                      <div className="text-wrapper-45">Close to Market</div>
                    </div>
                    <div className="div-12">
                      <div className="text-wrapper-45">Gated Society</div>
                    </div>
                  </div>
                </div>

                <div className="div-pd-3">
                  <div className="div-18">
                    <div className="list-2">
                      <div className="item-3">
                        <div className="text-wrapper-46">Transaction Type</div>
                        <div className="text-wrapper-47">:</div>
                        <div className="overlap-group-5">
                          <div className="div-wrapper-2">
                            <div className="text-wrapper-48">Resale</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-4">
                        <div className="text-wrapper-46">
                          Property Ownership
                        </div>
                        <div className="text-wrapper-49">:</div>
                        <div className="overlap-4">
                          <div className="div-wrapper-2">
                            <div className="text-wrapper-48">Freehold</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-5">
                        <div className="text-wrapper-50">Flooring</div>
                        <div className="text-wrapper-51">:</div>
                        <div className="span-flooring-label">
                          <div className="text-wrapper-48">Vitrified</div>
                        </div>
                      </div>

                      <div className="overlap-5">
                        <div className="item-7">
                          <div className="text-wrapper-52">Gated Community</div>
                          <div className="text-wrapper-52">:</div>
                          <div className="div-wrapper-3">
                            <div className="text-wrapper-48">Yes</div>
                          </div>
                        </div>
                        <div className="item-8">
                          <div className="text-wrapper-50">Parking</div>
                          <div className="text-wrapper-53">:</div>
                          <div className="span-reserved">
                            <div className="text-wrapper-48">Covered, Open</div>
                          </div>
                        </div>
                      </div>
                      <div className="overlap-6">
                        <div className="item-9">
                          <div className="text-wrapper-52">Water Source</div>
                          <div className="text-wrapper-52">:</div>
                          <div className="span-watersource">
                            <div className="text-wrapper-48">
                              Municipal corporation
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-11">
                        <div className="text-wrapper-50">Property Code</div>
                        <div className="text-wrapper-54">:</div>
                        <div className="span-prop-id">
                          <div className="text-wrapper-48">{propertyId}</div>
                        </div>
                        <div className="div-component-10">
                          <div className="text-wrapper-55">
                            www.99acres.com/{propertyId}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-19">
                    <div className="heading-about">About Property</div>
                    <div className="div-component-11">
                      <div className="div-component-12">
                        <p className="div-20">
                          <span className="text-wrapper-56">Address</span>
                          <span className="text-wrapper-57">: </span>
                        </p>
                        <p className="div-20">
                          {propertyName}, {address}
                        </p>
                      </div>
                      <p className="text-wrapper-58">
                        {city}, {state}
                      </p>
                    </div>
                  </div>
                  <div className="div-component-13">
                    <div className="heading-2">Semifurnished</div>
                    <div className="text-wrapper-59">Furnishing Details</div>
                    <div className="list-3">
                      <div className="item-12">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons@2x.png"
                        />
                        <div className="text-wrapper-60">{bhk} Wardrobe</div>
                      </div>
                      <div className="item-13">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-1@2x.png"
                        />
                        <div className="text-wrapper-60">1 Water Purifier</div>
                      </div>
                      <div className="item-14">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-2@2x.png"
                        />
                        <div className="text-wrapper-60">{bhk + 1} Fan</div>
                      </div>
                      <div className="item-15">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-3@2x.png"
                        />
                        <div className="text-wrapper-60">{bhk - 1} Geyser</div>
                      </div>
                      <div className="item-16">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-4@2x.png"
                        />
                        <div className="text-wrapper-60">{bhk + 2} Light</div>
                      </div>

                      <div className="item-18">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-6@2x.png"
                        />
                        <div className="text-wrapper-60">1 Chimney</div>
                      </div>
                      <div className="item-19">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-7@2x.png"
                        />
                        <div className="text-wrapper-60">No AC</div>
                      </div>
                      <div className="item-20">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-8@2x.png"
                        />
                        <div className="text-wrapper-60">No Bed</div>
                      </div>
                      <div className="item-21">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-9@2x.png"
                        />
                        <div className="text-wrapper-60">No Curtains</div>
                      </div>
                      <div className="item-22">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-10@2x.png"
                        />
                        <div className="text-wrapper-60">No Dining Table</div>
                      </div>

                      <div className="item-24">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-12@2x.png"
                        />
                        <div className="text-wrapper-60">No Microwave</div>
                      </div>
                      <div className="item-25">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-13@2x.png"
                        />
                        <div className="text-wrapper-60">No Fridge</div>
                      </div>
                      <div className="item-26">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-14@2x.png"
                        />
                        <div className="text-wrapper-60">No Sofa</div>
                      </div>
                      <div className="item-27">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-15@2x.png"
                        />
                        <div className="text-wrapper-60">No Stove</div>
                      </div>
                      <div className="item-28">
                        <img
                          className="img-2"
                          alt="I pd amnicons"
                          src="https://generation-sessions.s3.amazonaws.com/325b542c2d034ef5e7ca2ecb0d36b725/img/i-pd--amnicons-17@2x.png"
                        />
                        <div className="text-wrapper-60">No TV</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <header className="header">
                <Navbar />
              </header>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};
