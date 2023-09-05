import React from "react";
import "./BelowHeader.css";

export const Belowheader = () => {
  return (
    <div>
      <div className="div-belowheader">
        <div className="span">
          <p className="for-viewing-final">
            <span className="text-wrapper">For viewing final prices, </span>
            <span className="text-wrapper-2">Add Your Property Details</span>
          </p>
        </div>
      </div>

      <div className="div-pagecomponent-lw">
        <div className="div-overlay" />
        <div className="div-2">
          <div className="div-owner">
            {/* <img className="i-icons-bosd" alt="I icons bosd" src="i-icons-bosd-24-2.png" /> */}
            <div className="text-wrapper-4">Owner Plans</div>
          </div>

          <div className="div-index-dashstyle" />
          <div className="div-dealer">
            {/* <img className="i-icons-bosd" alt="I icons bosd" src="i-icons-bosd-24.png" /> */}
            <div className="text-wrapper-4">Dealer Plans</div>
          </div>
          <div className="div-index-dashstyle-2" />
          <div className="div-builder">
            {/* <img className="i-icons-bosd" alt="I icons bosd" src="image.png" /> */}

            <div className="text-wrapper-4">Builder Plans</div>
          </div>
        </div>
      </div>
    </div>
  );
};
