import React from "react";
import "./KeyStrengths.css";

function KeyStrengths() {
  return (
    <section className="section is-medium has-background-black">
      <div className="columns" data-aos="fade-up">
        <div className="Education">
          <div className="pt-6 pl-6 pr-6">
            <p className="title is-1 about-me hs-text-left has-text-white">
              KEY STRENGTHS AND EXTRA CURRICULAR WORKS
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="pt-1 pl-6 pr-6 pb-6">
        <p className="about-info has-text-centered subtitle is-2 pt-3 has">
          <div className="has-text-grey-light is-size-5">
            <ul style={{ liststyletype: "disc" }}>
              <li>
                Acting as the Chairperson of the School Scout Association
                2018/2019.
              </li>
              <li>Committee member of School Commerce Society in 2019.</li>
              <li>Member of School Carrom Team at Anula Vidyalaya.</li>
              <li>Quick learning and understanding.</li>
            </ul>
          </div>
        </p>
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

export default KeyStrengths;
