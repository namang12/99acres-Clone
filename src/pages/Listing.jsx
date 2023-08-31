import React from "react";
import Header from "../components/ListingPage/Header";
import CenterBody from "../components/ListingPage/CenterBody";
import Footer from "../components/ListingPage/Footer";
import PostPropertyForm from "../components/ListingPage/PostPropertyForm";

const Listing = () => {
  return (
    <div>
      <PostPropertyForm/>
      <CenterBody />
      <Header />
      <Footer />
    </div>
  );
};

export default Listing;
