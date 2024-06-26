import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="div-footer">
      <div className="div-footer-2">
        <div className="div-footer-3">
          <div className="list">
            <div className="text-wrapper-46">99acres</div>
            <div className="text-wrapper-48">Mobile Apps</div>
            <div className="text-wrapper-48">Our Services</div>
            <div className="text-wrapper-48">Price Trends</div>
            <div className="text-wrapper-48">Post your Property</div>
            <div className="text-wrapper-48">Builders in India</div>
            <div className="text-wrapper-48">Area Converter</div>
            <div className="text-wrapper-48">Articles</div>
            <div className="text-wrapper-48">Customer Service</div>
            <div className="text-wrapper-48">Sitemap</div>
          </div>

          <div className="list">
            <div className="text-wrapper-46">Company</div>
            <div
              className="text-wrapper-48 clicky"
              onClick={() => navigate("/aboutus")}
            >
              About us
            </div>
            <div
              className="text-wrapper-48 clicky"
              onClick={() => navigate("/contactus")}
            >
              Contact us
            </div>
            <div className="text-wrapper-48">Careers with us</div>
            <div className="text-wrapper-48">Terms & Conditions</div>
            <div className="text-wrapper-48">Request Info</div>
            <div className="text-wrapper-48">Feedback</div>
            <div className="text-wrapper-48">Report a problem</div>
            <div className="text-wrapper-48">Testimonials</div>
            <div className="text-wrapper-48">Privacy Policy</div>
            <div className="text-wrapper-48">Summons/Notices</div>
            <div className="text-wrapper-48">Grievances</div>
            <div className="text-wrapper-48">Safety Guide</div>
          </div>

          <div className="list">
            <div className="text-wrapper-46">Our Partners</div>
            <div className="div-wrapper-2a">
              <a href="https://www.naukri.com/" target="_blank">
                <p className="text-wrapper-48">Naukri.com - Jobs in India</p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.naukrigulf.com/" target="_blank">
                <p className="text-wrapper-51">
                  Naukrigulf.com - Jobs in
                  <br />
                  middle east
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a
                href="https://www.jeevansathi.com/m0/homepage/index"
                target="_blank"
              >
                <p className="text-wrapper-51">
                  Jeevansathi.com -<br />
                  Matrimonials
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.brijj.com/" target="_blank">
                <p className="text-wrapper-51">
                  Brijj.com - Professional
                  <br />
                  Networking
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.shiksha.com/" target="_blank">
                <p className="text-wrapper-51">
                  Shiksha.com - Education
                  <br />
                  Career Info
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.policybazaar.com/" target="_blank">
                <p className="text-wrapper-51">
                  Policybazaar.com -<br />
                  Insurance India
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.meritnation.com/" target="_blank">
                <p className="text-wrapper-51">
                  Meritnation.com - Online
                  <br />
                  Educational Assessment
                </p>
              </a>
            </div>
            <div className="div-wrapper-2a">
              <a href="https://www.paisabazaar.com/" target="_blank">
                <p className="text-wrapper-51">PaisaBazaar.com</p>
              </a>
            </div>
            <div className="div-wrapper-2a">
              <a href="https://www.ambitionbox.com/" target="_blank">
                <p className="text-wrapper-51">AmbitionBox.com</p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.firstnaukri.com/" target="_blank">
                <p className="text-wrapper-51">
                  FirstNaukri.com - A jobsite
                  <br />
                  for campus hiring
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://www.jobhai.com/" target="_blank">
                <p className="text-wrapper-51">
                  Jobhai.com – Find Jobs Near
                  <br />
                  You
                </p>
              </a>
            </div>
            <div className="div-wrapper-2">
              <a href="https://techminis.com/" target="_blank">
                <p className="text-wrapper-51">
                  Techminis.com –Tech news
                  <br />
                  on the go
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="list-2">
          <div className="text-wrapper-46">Contact Us</div>

          <p className="text-wrapper-52">Toll Free - 1800 41 99099</p>
          <p className="text-wrapper-53">
            Monday - Saturday (9:00Am to 7:00PM IST)
          </p>
          <div className="text-wrapper-54">Email - feedback@99acres.com</div>
          <div className="text-wrapper-55">Connect with us</div>

          <div className="overlap-8">
            <div className="div-footer-5">
              <div>
                <a href="https://www.facebook.com/99acres/" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#ffffff", fontSize: "30px" }}
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://www.youtube.com/user/99acresindia"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#ffffff", fontSize: "30px" }}
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/99acresIndia" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#ffffff", fontSize: "30px" }}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/99acresindia/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff", fontSize: "30px" }}
                  />
                </a>
              </div>
            </div>

            <div className="text-wrapper-55">Download the App</div>
            <a
              href="https://play.google.com/store/apps/details?id=com.nnacres.app&hl=en&pli=1"
              target="_blank"
            >
              <img
                className="get-it-img"
                src="https://static.99acres.com/universalapp/img/Play.png"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/99acres-property-search/id781765588"
              target="_blank"
            >
              <img
                className="get-it-img"
                src="https://static.99acres.com/universalapp/img/ios.png"
              />
            </a>
          </div>

          <div className="p-caption-subdued">
            <p className="text-wrapper-57">
              *Usage of 99acres.com to upload content showing area in non
              standard units or
              <br />
              which enables targeting by religion/community/caste/race is
              prohibited. Please
              <br />
              report inappropriate content by writing to us at
              <span className="link-report-abuse">report abuse</span>
            </p>
          </div>

          <p className="all-rights-reserved">
            All trademarks are the property of their
            <br />
            respective owners.
          </p>

          <p className="all-rights-reserved">
            All rights reserved - Info Edge (India) Ltd.
            <br />A &nbsp;
            <span className="link-naukri-com">naukri.com</span>&nbsp;
            <span className="all-rights-reserved">group venture.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
