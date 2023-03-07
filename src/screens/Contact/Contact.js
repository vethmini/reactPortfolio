import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="section is-medium has-background-black">
      <div className="columns" data-aos="fade-up">
        <div className="column is-6">
          <div className="Education">
            <div className="pt-6 pl-6 pr-6">
              <p className="title is-1 about-me hs-text-left has-text-white">
                GET IN TOUCH WITH ME
              </p>
              <div className="ml-6">
                <p className="has-text-grey-light is-size-5">
                  Always available for freelance work or a quick tech chat!
                </p>
                <br />
                <br />

                <div className="has-text-grey-light has-text-justified">
                  <span className="icon-text">
                    <span className="icon">
                      <div
                        className="icon is-medium fas fa-lg"
                        data-aos="fade-right"
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </span>
                    <span>
                      <p>siluxvethz@gmail.com</p>
                    </span>
                  </span>
                  <br />
                  <br />

                  <span className="icon-text">
                    <span
                      className="icon icon is-medium fas fa-lg"
                      data-aos="fade-right"
                    >
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <span>
                      <p>+94 714 866 795</p>
                    </span>
                  </span>
                  <br />
                  <br />

                  <span className="icon-text">
                    <span
                      className="icon icon is-medium fas fa-lg"
                      data-aos="fade-right"
                    >
                      <i className="fa-solid fa-location-pin"></i>
                    </span>
                    <span>
                      <p>Colombo, Sri Lanka</p>
                    </span>
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
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
  );
}
export default Contact;
