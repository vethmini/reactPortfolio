import React from "react";
import "./Professional.css";

function Professional() {
  return (
    <div id="professional">
      <section
        className="section is-medium has-background-black"
        id="professional"
      >
        <div className="columns" data-aos="fade-up">
          <div className="column is-6">
            <div className="pt-6 px-4">
              <p className="title is-1 about-me hs-text-left has-text-white">
                PROFESSIONAL ACCOMPLISHMENT & SKILLS
              </p>
              <br />

              <p className="has-text-grey-light is-size-5">
                Business Information Technology
                <br />
                Diploma
                <br />
                SIBT Campus
              </p>
            </div>
          </div>

          <div className="column is-6 is-hidden-touch">
            <div className="pt-6 pl-6 pr-6">
              <p className="title is-1 about-me hs-text-left"></p>
              <br />

              <p className="about-info has-text-justified subtitle is-2 pt-3">
                <div className="has-text-grey-light is-size-5">
                  <p className="title is-1 about-me hs-text-left has-text-white"></p>
                  <br />

                  <ul style={{ liststyletype: "disc" }}>
                    <li>Communication skills</li>
                    <li>Problem-solving skills</li>
                    <li>Time management skills</li>
                    <li>Analytical thinking</li>
                    <li>Proficiency in C, Java and Python</li>
                    <li>Knowledge of SQL</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>

          <div className="column is-6 is-hidden-desktop">
            <div className="pl-6 pr-6">
              <p className="title is-1 about-me hs-text-left"></p>
              <br />

              <p className="about-info has-text-justified subtitle is-2">
                <div className="has-text-grey-light">
                  <p className="title is-1 about-me hs-text-left has-text-white"></p>
                  <br />

                  <ul style={{ liststyletype: "disc" }}>
                    <li>Communication skills</li>
                    <li>Problem-solving skills</li>
                    <li>Time management skills</li>
                    <li>Analytical thinking</li>
                    <li>Proficiency in C, Java and Python</li>
                    <li>Knowledge of SQL</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full has-text-right">
            <div className="content">
              <h5 className="has-text-white is-italic is-size-6 is-family-secondary">
                @Siluni Alahakoon
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Professional;
