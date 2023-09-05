import React from "react";
import "./OwnerPlan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";

export const OwnerPlan = () => {
  return (
    <div className="owner-plan">
      <div className="text-wrapper">OWNER PLANS</div>
      <p className="heading-pick-a">Pick a plan to sell your house faster</p>
      
      <div className="div-planscatalog">

        <div className="div-self-service">

          <div className="div-planscatalog-2">
            <div className="i-icons-bosd-wrapper">
            <FontAwesomeIcon icon={faArrowTrendUp} size="lg" style={{color: "#42adff",}} />
            </div>
            <div className="text-wrapper-2">Self-Service Plans</div>
          </div>

          <div className="div-planscatalog-3">

            <div className="div-product">

              <div className="div-d-bos">
                <div className="class">
                  <div className="png" />
                  <div className="div-d-bos-2">
                    <div className="text-wrapper-3">ADVANCED</div>
                    <div className="text-wrapper-4">Self Service Plan</div>
                  </div>
                </div>
                <img src={img1} alt="59%" />
              </div>

              <div className="p-d-bos">
                <p className="p">
                  5X buyers due to high visibility of property
                  <br />
                  across 99acres
                </p>
              </div>
              <div className="div-d-bos-3">
                <div className="div-hd-b">
                  <div className="text-wrapper-5">₹1,198/-</div>
                  <div className="text-wrapper-6">Onwards</div>
                  <p className="text-wrapper-7">1 / 2 / 3 / 12 month options</p>
                </div>
                <div className="button-wrapper">
                  <button className="button-ownerplan">
                    <div className="text-wrapper-8">Buy Now</div>
                  </button>
                </div>
              </div>

              <div className="div-wrapper">

                <div className="div-hd-bd">
                  <div className="div-d-bos-4" style={{maxHeight:"20px"}}>
                    <div className="greytickx-png" />
                      <p className="text-wrapper-9">Top ranks - 5X buyers</p>
                  </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png" />
                    
                      <div className="text-wrapper-9">
                        Premium listing design
                     
                    </div>
                  </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png" />
                      <div className="text-wrapper-9">
                        Larger photos &amp; Slideshow
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-product">
              <div className="div-d-bos">
                <div className="class">
                  <div className="planplusx-png" />
                  <div className="div-d-bos-2">
                    <div className="text-wrapper-3">ADVANCED PLUS</div>
                    <div className="text-wrapper-4">Self Service Plan</div>
                  </div>
                </div>
                <img src={img2} alt="73%" />
              </div>
              <div className="p-d-bos">
                <p className="p">
                  8X buyers due to high visibility across 99acres
                  <br />
                  with Facebook &amp; google ads, Plus all
                  <br />
                  Advanced plan benefits
                </p>
              </div>
              <div className="div-d-bos-3">
                <div className="div-hd-b">
                  <div className="text-wrapper-5">₹5,898/-</div>
                  <div className="text-wrapper-6">Onwards</div>
                  <div className="text-wrapper-7">4 month options</div>
                </div>
                <div className="button-wrapper">
                  <button className="button-ownerplan">
                    <div className="text-wrapper-8">Buy Now</div>
                  </button>
                </div>
              </div>

              
              <div className="div-wrapper">

                <div className="div-hd-bd">
                  <div className="div-d-bos-4" style={{maxHeight:"20px",}}>
                    <div className="greytickx-png"/>
                      <p className="text-wrapper-9">
                        All benefits of Advanced Plan
                      </p>
                    </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png" />
                      <div className="text-wrapper-9">8X buyers</div>
                    </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png" />
                      <p className="text-wrapper-9">
                        7,500+ Google &amp; Facebook ads
                      </p>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="div-assisted-plans">

          <div className="div-planscatalog-4">
            <div className="img-wrapper">
            <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#ffc157",}} />
            </div>
            <div className="text-wrapper-2">Assisted Plans</div>
          </div>

          <div className="div-planscatalog-3">
            <div className="div-product">
              <div className="div-d-bos">
                <div className="class">
                  <div className="assistx-png"/>
                  <div className="div-d-bos-2">
                    <div className="text-wrapper-3">ASSIST</div>
                    <div className="text-wrapper-4">with RM</div>
                  </div>
                </div>
                <img src={img3} alt="85%" />
              </div>
              <div className="p-d-bos">
                <p className="p">
                  Sell conveniently with 8X buyers. No
                  <br />
                  unwanted calls, only filtered genuine buyers.
                  <br />
                  Assistance in organising site visits
                </p>
              </div>
              <div className="div-d-bos-3">
                <div className="div-hd-b">
                  <div className="text-wrapper-5">₹11,999/-</div>
                  <div className="text-wrapper-6a">Onwards</div>
                  <p className="text-wrapper-7">3 / 6 month options</p>
                </div>
                <div className="button-wrapper">
                  <button className="button-ownerplan">
                    <div className="text-wrapper-8">Buy Now</div>
                  </button>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="div-hd-bd">
                  <div className="div-d-bos-4" style={{maxHeight:"20px"}}>
                    <div className="greytickx-png"/>
                      <p className="text-wrapper-9">
                        All benefits of Advanced Plan
                      </p>
                    </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png"/>
                      <div className="text-wrapper-9">
                        Relationship manager assistance
                      </div>
                    </div>
                  <div className="div-d-bos-4">
                      <div className="greytickx-png" />
                      <p className="text-wrapper-9">
                        Filtered genuine buyers - Our executive
                        <br />
                        manages all conversations on your
                        <br />
                        behalf.
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-product">
              <div className="div-d-bos">
                <div className="class">
                  <div className="assistplusx-png" />
                  <div className="div-d-bos-2">
                    <div className="text-wrapper-3">ASSIST PLUS</div>
                    <div className="text-wrapper-4">with RM</div>
                  </div>
                </div>
                <img src={img4} alt="97%" />
              </div>
              <div className="p-d-bos">
                <p className="p">
                  Convenient &amp; Fast! Signature plan with 12X
                  <br />
                  buyers. High visibility, google &amp; facebook ads,
                  <br />
                  Plus all Assist plan benefits.
                </p>
              </div>
              <div className="div-d-bos-3">
                <div className="cdiv-hd-b">
                  <div className="text-wrapper-5">₹17,998/-</div>
                  <div className="text-wrapper-6a">Onwards</div>
                  <p className="text-wrapper-7">3 / 6 month options</p>
                </div>
                <div className="button-wrapper">
                  <button className="button-ownerplan">
                    <div className="text-wrapper-8">Buy Now</div>
                  </button>
                </div>
              </div>
  
              <div className="div-wrapper">
                <div className="div-hd-bd">
                  <div className="div-d-bos-4" style={{maxHeight:"20px"}}>
                    <div className="greytickx-png" />
                      <p className="text-wrapper-9">
                        All benefits of Assist Plan
                      </p>
                  </div>
                  <div className="div-d-bos-4" style={{maxHeight:"30px"}}>
                    <div className="greytickx-png"/>
                      <p className="text-wrapper-9">
                        12X buyers filtered by relationship
                        <br />
                        manager
                      </p>
                  </div>
                  <div className="div-d-bos-4">
                    <div className="greytickx-png" />
                      <p className="text-wrapper-9">
                        15,000+ Google &amp; Facebook ads
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
