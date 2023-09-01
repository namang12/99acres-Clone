import React, { useRef } from "react";
import "./CenterBody.css";
import Faq from "./Faq";

const CenterBody = () => {
  const knowmoreRef = useRef(null); //represents main section
  const postRef = useRef(null); //represents about section

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="center-body">
      <div className="container-2">
        <div className="div-postproperty"/>
        <div className="div-postproperty-3">
          {/* Center image with intro text and know more menu*/}

          <div className="overlap-2" ref={postRef}>
              <p className="sell-or-rent-your">
                <span className="span">
                  Sell or Rent your Property
                  <br />
                </span>
                <span className="text-wrapper-6">faster</span>
                <span className="span"> with 99acres.com</span>
              </p>
            
            <div className="span-postproperty">
              <div className="span-greentick"/>
              <div className="div-wrapper">
                <div className="text-wrapper-7">Advertise for FREE</div>
              </div>
            </div>
            <div className="span-postproperty">
              <div className="span-greentick" />
              <div className="div-wrapper">
                <div className="text-wrapper-7">Get unlimited enquiries</div>
              </div>
            </div>

            <div className="span-postproperty">
              <div className="span-greentick" />
              <div className="div-wrapper">
                <div className="text-wrapper-7">
                  Get Shortlisted Buyers and Tenants
                </div>
              </div>
            </div>

            <div className="span-postproperty">
              <div className="span-greentick" />
              <div className="div-wrapper">
                <div className="text-wrapper-7">
                  Assistance in co-ordinating site visits
                </div>
              </div>
            </div>


            <div className="overlap-3">
              <div className="desktop-animation" />
              <p className="div-ownerassitant">* Available with Owner Assist Plans</p>
            </div>
          </div>
          
          <div style={{width:"100%", display:"flex", justifyContent:"center",}}>
          <div
              className="div-2"
              onClick={() => {
                handleScroll(knowmoreRef.current);
              }}
            >
              <div className="div-wrapper-2">
                <div className="text-wrapper-15">Know More</div>
              </div>
              <span class="material-symbols-rounded">expand_more</span>
            </div>
            </div>



          {/* How to Post with Begin to POst Your Property */}
          <div className="div-3" ref={knowmoreRef}>

            <div className="heading">
              <div className="text-wrapper-22">HOW TO POST</div>
              <p className="post-your-property">
                Post Your Property in
                <br />3 Simple Steps
              </p>
            </div>

            <div className="div-postpropsteps">
              <div className="div-4">
                <div className="image-2"/>
                <div className="heading-2">
                  <p className="div-5">
                    <span className="text-wrapper-6">01. </span>
                    <span className="span">Add details of your property</span>
                  </p>
                </div>
                <div className="div-caption-strong">
                  <p className="text-wrapper-23">
                    Begin by telling us the few basic details about your
                    <br />
                    property like your property type, location, No. of
                    <br />
                    rooms etc
                  </p>
                </div>
              </div>


              <div className="div-4">
                <div className="image-3" />
                <div className="heading-2">
                  <p className="div-5">
                    <span className="text-wrapper-6">02. </span>
                    <span className="span">Upload Photos &amp; Videos</span>
                  </p>
                </div>
                <div className="div-caption-strong">
                  <p className="text-wrapper-23">
                    Upload photos and videos of your property either
                    <br />
                    via your desktop device or from your mobile phone
                  </p>
                </div>
              </div>
              <div className="div-4">
                <div className="image-4"/>
                <div className="heading-2">
                  <p className="div-5">
                    <span className="text-wrapper-6">03. </span>
                    <span className="span">Add Pricing &amp; Ownership</span>
                  </p>
                </div>
                <div className="div-caption-strong">
                  <p className="text-wrapper-23">
                    Just update your property’s ownership details and
                    <br />
                    your expeced price and your property is ready for
                    <br />
                    posting
                  </p>
                </div>
              </div>
            </div>
            <div
              className="button-howtopost"
              onClick={() => {
                handleScroll(postRef.current);
              }}
            >
              <p className="text-wrapper-24">Begin to Post your Property</p>
            </div>
          </div>

          {/* Banner Image */}
          
          <div className="div-bannerimage">
            <img
              className="banner-image"
              src="https://99acres.com/ppf-static/media/visBannercompress.acecbc0b.png"
            />
          </div>
          {/* Visitor Banner */}

          <div className="div-visitorsbanner">
            <div className="banner-wrapper">
              <p className="banner-text">
                With over 7 million unique visitors monthly, your
                <br />
                property gets maximum visibility on 99acres.com
              </p>
            </div>
            <div className="div-visitorsbanner-2">
              <div className="div-6">
                <div className="text-wrapper-25">OVER</div>
                <div className="text-wrapper-26">1M</div>
                <div className="text-wrapper-27">Property Listings</div>
              </div>
              <div className="div-6">
                <div className="text-wrapper-25">OVER</div>
                <div className="text-wrapper-26">5.5M</div>
                <div className="text-wrapper-27">Monthly Searches</div>
              </div>
              <div className="div-6">
                <div className="text-wrapper-25">OVER</div>
                <div className="text-wrapper-26">200K</div>
                <div className="text-wrapper-27">
                  Owners advertising monthly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="div-additional">
        <div style={{width:"1195px"}}>
        <div className="text-wrapper-25-a">ADDITIONAL BENEFITS</div>
        <div className="everything-wrapper">
          <p className="text-wrapper-28">
            Everything 99acres does to sell or
            <br />
            rent out your property faster…
          </p>
          </div>
        </div>

        <div className="div-8">
          <div className="additionalinfo-wrapper">
            <p className="text-wrapper-23">
              You can easily sell, rent out or lease a property online with
              99acres.com, India's best property portal. You can find the ideal
              buyers and tenants quickly and conveniently. Post your free
              <br />
              advertisement to sell or rent out a house, flat, apartment, villa,
              land, shop, office or showroom and all other types of residential
              and commercial real estate to get qualified enquiries.
            <br/>
            <br/>
              Whether you are an owner, builder or broker or have a property for
              sale or office spaces for rent or lease, shops for rent/lease, put
              your independent house or flat on rent, you can
              <br />
              advertise your property for free, on 99acres.com, the best real
              estate property site.
            <br/>
            <br/>
              99acres.com is one of the most trustworthy channels to search
              buyers and tenants online for flats, independent houses, offices,
              shops, showrooms, warehouses and factories. What
              <br />
              makes 99acres.com unique is its high-quality website traffic and
              its reach to millions of households across India and abroad who
              are looking to rent or buy a residential or commercial
              <br />
              property across India.
            </p>
          </div>
        </div>
        <div className="btn-additionalinfopost">
        <div
          className="button-additionalinfopost"
          onClick={() => {
            handleScroll(postRef.current);
          }}
        >
          <p className="text-wrapper-24">Begin to Post your Property</p>
        </div>
        </div>
      </div>

      <div className="faq">
      <Faq />
      </div>
    </div>
  );
};

export default CenterBody;
