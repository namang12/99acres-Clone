import React from "react";
import Header from "../components/ListingPage/Header";
import CenterBody from "../components/ListingPage/CenterBody";
import Footer from "../components/ListingPage/Footer";
import PostPropertyForm from "../components/ListingPage/PostPropertyForm";
import GoToTop from "../components/PlanPage/GoToTop";

const Listing = () => {
  return (
    <div>
      <PostPropertyForm/>
      <CenterBody />
      <Header />
      <Footer />
      <GoToTop/>
    </div>
  );
};

export default Listing;
