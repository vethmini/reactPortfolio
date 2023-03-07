import React from "react";
import "./Education.css";

function Education() {
  return (
    <div id="education">
      <section
        className="section is-medium has-background-black is-fullheight"
        id="education"
      >
        <div className="columns is-hidden-touch mb-0" data-aos="fade-up">
          <div className="column is-6">
            <div className="Education">
              <div className="pt-6 pl-6 pr-6">
                <p className="title is-1 about-me hs-text-left has-text-white ">
                  EDUCATION
                </p>
                <br />
                {/* <!-- right side --> */}
                <div className="has-text-grey-light ">
                  <p className="about-info has-text-justified subtitle is-2 pt-3 has-text-grey-light">
                    Bachelor's Degree
                  </p>
                  <div className="is-size-5">
                    <p>University of Colombo</p>
                    <p>2021 - Present</p>
                  </div>

                  <p className="about-info has-text-justified subtitle is-2 pt-3 has-text-grey-light">
                    School Education
                  </p>
                  <div className="is-size-5">
                    <p>Anula Vidyalaya</p>
                    <p>2007-2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- left side --> */}
          <div className="column is-6">
            <div className="Education">
              <div className="pt-6 pl-6 pr-6">
                <p className="title is-1 about-me hs-text-left"></p>
                <br />

                <p className="about-info has-text-justified subtitle is-3 pt-6 has-text-grey-light">
                  Bsc. (Hons) in Information Systems
                </p>
                <p className="has-text-grey-light is-size-5">
                  Currently reading for my Bachelors' Degree in Information
                  Systems at University of Colombo School of Computing
                </p>

                <p className="about-info has-text-justified subtitle is-3 pt-6 has-text-grey-light">
                  Primary and Secondary Education
                </p>
                <p className="has-text-grey-light is-size-5">
                  Passed General Certificate of Education Exams; Ordinary Level
                  Exam with 8 A and 1 B passes and Advanced Level with 2 A
                  passes and 1 B pass.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-hidden-desktop">
          <div className="column is-full">
            <div className="Education">
              <div className="py-6 px-4">
                <p className="title is-1 about-me hs-text-left has-text-white">
                  EDUCATION
                </p>

                <p className="about-info has-text-justified subtitle is-2 pt-3 has-text-grey-light">
                  Bachelor's Degree
                </p>
                <p>University of Colombo</p>
                <p>2021 - Present</p>

                <p className="about-info has-text-justified subtitle is-4 pt-4 has-text-grey-light">
                  Bsc. (Hons) in Information Systems
                </p>
                <p className="has-text-grey-light">
                  Currently reading for my Bachelors' Degree in Information
                  Systems at University of Colombo School of Computing
                </p>

                <p className="about-info has-text-justified subtitle is-2 pt-6 has-text-grey-light">
                  School Education
                </p>
                <p>Anula Vidyalaya</p>
                <p>2007-2020</p>

                <p className="about-info has-text-justified subtitle is-4 pt-4 has-text-grey-light">
                  Primary and Secondary Education
                </p>
                <p className="has-text-grey-light">
                  Passed General Certificate of Education Exams; Ordinary Level
                  Exam with 8 A and 1 B passes and Advanced Level with 2 A
                  passes and 1 B pass.
                </p>
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
    </div>
  );
}

export default Education;
