import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="about">
      <section className="section is-medium info has-background-black">
        {/* <!-- about description --> */}
        <div className="About is-hidden-touch" data-aos="fade-up">
          <div className="pt-6 pl-6 pr-6">
            <p className="title is-1 about-me hs-text-left pl-6 has-text-white">
              ABOUT
            </p>
            <br />
            <p className="about-info has-text-justified pt-3 px-3 pb-6 has-text-grey-light font-size is-size-3">
              Hi, I’m Siluni Alahakoon.I’m from Colombo in Sri Lanka.Recent
              Information Systems graduate with coding knowledge in different
              programming languages.Professional with advanced knowledge of
              designing and building computer networks and systems.A motivated
              and dedicated individual seeking a position that involves regular
              use of these skills.
            </p>
          </div>
        </div>

        <div className="About is-hidden-desktop">
          <div className="pt-6 pl-6 pr-6">
            <p className="title is-1 about-me hs-text-left pl-6 has-text-white">
              ABOUT
            </p>
            <br />
            <p className="about-info has-text-justified pt-3 px-3 pb-6 has-text-grey-light font-size">
              Hi, I’m Siluni Alahakoon.I’m from Colombo in Sri Lanka.Recent
              Information Systems graduate with coding knowledge in different
              programming languages.Professional with advanced knowledge of
              designing and building computer networks and systems.A motivated
              and dedicated individual seeking a position that involves regular
              use of these skills.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-full has-text-right">
            <div className="content">
              <h5 className="has-text-white is-italic is-size-6 is-family-secondary">
                @SILUNI ALAHAKOON
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
