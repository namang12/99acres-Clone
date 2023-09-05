import React from "react";
import "./Benefit.css";

const Benefit = () => {
  return (
    <div className="div-benefit">
      <div className="overlay-div">
        <div className="div-heading">
          <div className="text-wrapper">WHY UPGRADE MY POSTING?</div>
          <p className="heading-wrapper">
            Benefits of upgrading your posting
            <br />
            on 99acres
          </p>
        </div>

        <div className="list">

          
            <div className="item">
              <div className="img-1" />
              <div className="div-title-bold">
                <div className="div-number">01.</div>
                <div className="div-hdtxt">Appear higher in searches</div>
              </div>
              <div className="para-span">
                <p className="div-para">
                  Upgraded postings appear higher in
                  <br />
                  search results giving your posting more
                  <br />
                  views and responses
                </p>
              </div>
            </div>

          
            <div className="item">
              <div className="img-2" />
              <div className="div-title-bold">
                <div className="div-number">02.</div>
                <div className="div-hdtxt">Hassle free selling/renting</div>
              </div>
              <div className="para-span">
                <p className="div-para">
                  Relax and sell faster with our dedicated
                  <br />
                  relationship manager assistance
                </p>
              </div>
            </div>


          <div className="item">
            <div className="img-3" />
            <div className="div-title-bold">
              <div className="div-number">03.</div>
              <p className="div-hdtxt">Reach users on social media</p>
            </div>
            <div className="para-span">
              <p className="div-para">
                Reach more relevant buyers with
                <br />
                Facebook and Google marketing
              </p>
            </div>
          </div>

        </div>
        <div className="link-link">
          <p className="text-wrapper-2">
            View owner plans to sell house faster
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
