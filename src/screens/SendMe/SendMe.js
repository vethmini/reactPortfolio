import React from "react";
import "./SendMe.css";

function SendMe() {
  return (
    <div id="contact">
      <section className="section is-medium has-background-black" id="contact">
        <div className="Education" data-aos="fade-up">
          <div className="pt-6 pl-6 pr-6">
            <p className="title is-1 about-me hs-text-left has-text-white">
              CONTACT ME
            </p>
            <br />

            <div className="field" data-aos="fade-up">
              <label className="label is-size-5 has-text-grey-light">
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
            </div>

            <div className="field" data-aos="fade-up">
              <label className="label is-size-5 has-text-grey-light">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div className="field" data-aos="fade-up">
              <label className="label is-size-5 has-text-grey-light">
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Enter your Message"
                ></textarea>
              </div>
            </div>

            <div className="field has-text-right" data-aos="fade-left">
              <div className="control">
                <button
                  className="button"
                  style={{ color: "white", backgroundColor: "#3F8E00" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SendMe;
