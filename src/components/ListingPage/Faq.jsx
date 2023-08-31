import React from "react";
import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
      <div className="container-1">
        <div className="overlap">
          <div className="div-hd-bbd">
            <p className="text-wrapper-29">
              KNOW MORE ABOUT POSTING ON 99acres
            </p>
            <div className="heading-frequently">Frequently Asked Questions</div>

            <div className="all-accordion">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="text-wrapper-30">
                      What type of property I can post on 99acres.com for
                      selling/renting?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="div-9">
                      As an owner, agent, or builder, you can post all types of
                      residential and commercial properties for rent, lease, or
                      sale. On 99acres.com, millions of people search for flats,
                      houses, plots, office space, shops, showrooms, warehouses,
                      commercial land, and agricultural land, among others.
                      99acres.com is the best property portal to sell or rent
                      out your property fast!
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="text-wrapper-30">
                      Is posting property for selling/renting on 99acres.com
                      FREE?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="div-9">
                      Yes, you can post your property listing online for
                      selling/renting on 99acres.com for FREE. There are no
                      charges involved. All buyer/tenant enquiries will be
                      shared with you completely free of cost.
                      <br />
                      <br />
                      You can drop a ‘Hi’ on WhatsApp at 882 682 1122 to post
                      easily for FREE
                      <br />
                      <br />
                      You can also explore our additional services to attract
                      even more buyers and tenants
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="text-wrapper-30">
                      Can I sell/rent out my property on my own without paying
                      brokerage?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="div-9">
                      Yes, you can easily rent out or sell your property as an
                      owner on 99acres.com by posting your property ad for free.
                      Your property will be visible to thousands of buyers and
                      tenants visiting us daily, without involving any real
                      estate agents.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="text-wrapper-30">
                      Will I get genuine buyers tenants even with free property
                      listings?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="div-9">
                      Yes, you will be able to get genuine enquires even on free
                      property listings. 99acres.com is the only platform where
                      you get unlimited enquiries (with no cap) even on a free
                      property ad. You should add detailed information and
                      appealing photos receive maximum enquires from prospective
                      buyers or tenants.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Faq;
