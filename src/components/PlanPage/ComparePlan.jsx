import React from "react";
import "./ComparePlan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";

const ComparePlan = () => {
  return (
    <div className="compareplan-div">
      <div className="heading-div">
        <p className="heading-compare">Compare the plans and benefits</p>
      </div>
      <div className="overlap">
        <div className="div-d-bos">
          <div className="div">
            <div className="div-d-bos-2">
              <div className="i-icons-bosd-wrapper">
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  size="lg"
                  style={{ color: "#42adff" }}
                />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper">SELF SERVICE PLANS</div>
              </div>
            </div>
            <div className="div-d-bos-4">
              <div className="img-wrapper">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  style={{ color: "#ffc157" }}
                />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper">ASSISTED PLANS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="div-comparetable">
          <div className="div-d-bos-7">
            <div className="div-d-bos-8">
              <div className="text-wrapper-2">Plan Benefits</div>
            </div>
            <div className="div-cell">
              <div className="advanced">ADVANCED</div>
            </div>
            <div className="div-cell">
              <div className="advanced">ADVANCED PLUS</div>
            </div>
            <div className="div-cell">
              <div className="assist">ASSIST</div>
            </div>
            <div className="div-cell">
              <div className="assist">ASSIST PLUS</div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper" style={{ marginTop: "27px" }}>
              <p className="text-wrapper-4">Be more visible to Buyers</p>
            </div>
            <div className="div-hd-dfdd-wrapper">
            <img src={img1} alt="59%" />
            </div>
            <div className="div-hd-dfdd-wrapper">
            <img src={img2} alt="73%" />
            </div>
            <div className="div-hd-dfdd-wrapper">
            <img src={img3} alt="85%" />
            </div>
            <div className="div-hd-dfdd-wrapper">
            <img src={img4} alt="97%" />
            </div>
            
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-4">Increase in Buyer Responses</div>
            </div>

            <div className="div-hd-dfdd-wrapper">
              <div className="div-wrapper">
                <p className="up-to">
                  <span className="span">up to </span>
                  <span className="text-wrapper-5">5X</span>
                </p>
              </div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="div-wrapper">
                <p className="up-to">
                  <span className="span">up to </span>
                  <span className="text-wrapper-5">8X</span>
                </p>
              </div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="div-wrapper">
                <p className="up-to">
                  <span className="span">up to </span>
                  <span className="text-wrapper-5">6X</span>
                </p>
              </div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="div-wrapper">
                <p className="up-to">
                  <span className="span">up to </span>
                  <span className="text-wrapper-5">10X</span>
                </p>
              </div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-4">
                Relationship manager
                <br />
                assistance in selling
              </div>
            </div>

            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <p className="text-wrapper-4">
                Reach Buyers on Facebook
                <br />
                and Google platforms
              </p>
            </div>

            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="span-caption-strong">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  style={{ color: "#1bcd18" }}
                />
                <div className="text-wrapper-7">7,500 impressions</div>
              </div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon icon={faX} style={{ color: "#111318" }} />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="span-caption-strong">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  style={{ color: "#1bcd18" }}
                />
                <div className="text-wrapper-7">15,000 impressions</div>
              </div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <p className="text-wrapper-4">
                Premium listing, standout with
                <br />
                large Photos &amp; Slideshow
              </p>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <p className="text-wrapper-4">
                Free Verification &amp;
                <br />
                Photoshoot of your property*
              </p>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
            <div className="div-hd-dfdd-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#1bcd18" }}
              />
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-8">Plan duration</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <p className="text-wrapper-9">1 / 2 / 3 / 12 Months</p>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-9">4 Months</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-9">3 / 6 Months</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-9">3 / 6 Months</div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-8">Plan Cost</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-11">₹1,198</div>
              <div className="text-wrapper-12">Onwards</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-11">₹5,898</div>
              <div className="text-wrapper-12">Onwards</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-11">₹11,999</div>
              <div className="text-wrapper-12">Onwards</div>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <div className="text-wrapper-11">₹17,998</div>
              <div className="text-wrapper-12">Onwards</div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-hd-dfdd-wrapper"></div>
            <div className="div-hd-dfdd-wrapper">
              <button className="button-compareplan">
                <div className="text-wrapper-15">Buy Now</div>
              </button>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <button className="button-compareplan">
                <div className="text-wrapper-15">Buy Now</div>
              </button>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <button className="button-compareplan">
                <div className="text-wrapper-15">Buy Now</div>
              </button>
            </div>
            <div className="div-hd-dfdd-wrapper">
              <button className="button-compareplan">
                <div className="text-wrapper-15">Buy Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePlan;
