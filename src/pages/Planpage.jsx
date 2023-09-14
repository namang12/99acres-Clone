import React from "react";
import { Header } from "../components/PlanPage/Header";
import { Belowheader } from "../components/PlanPage/Belowheader";
import { OwnerPlan } from "../components/PlanPage/OwnerPlan";
import ComparePlan from "../components/PlanPage/ComparePlan";
import Footer from "../components/ListingPage/Footer";
import Benefit from "../components/PlanPage/Benefit";
import PaymentBox from "../components/PlanPage/PaymentBox";
import GoToTop from "../components/PlanPage/GoToTop";

const Planpage = () => {
  return (
    <div>
      <Header />
      <Belowheader />
      <OwnerPlan />
      <ComparePlan />
      <Benefit/>
      <PaymentBox/>
      <Footer />
      <GoToTop/>
    </div>
  );
};

export default Planpage;
