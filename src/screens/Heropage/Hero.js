import React from "react";
import ProfileImage from "./assets/me.jpg";
import Icon from "./assets/Capture1.JPG";
import "./Hero.css";

function Heropage() {
  return (
    <div id="home">
      <section className="section has-background-black">
        <div className="container">
          <div className="columns">
            <div className="column is-6 mt-7 is-align-items-center px-6 is-align-self-center">
              <h1 className="is-size-1 title has-text-white">Hi, I'm Siluni</h1>
              <h2 className="is-size-6 subtitle pt-4 has-text-grey-light">
                Undergraduate | Web Designer
              </h2>
              <p className="has-text-grey-light">
                A person who seeks to succeed in all opportunities both academic
                and non academics
              </p>
              {/* <!-- green button --> */}
              <div className="mt-6 pt-6 has-text-centered">
                <button className="button is-large is-brand">
                  <div data-aos="fade-right">Let's get started</div>
                </button>
              </div>
            </div>
            {/*  image  */}
            <div className="column is-6 has-text-centered" data-aos="zoom-in">
              <figure className="image is-image-size is-inline-block is-hidden-mobile">
                <img
                  className="is-rounded"
                  src={ProfileImage}
                  alt="ProfileImage"
                />
              </figure>
              <figure className="image is-image-size-mobile is-inline-block is-hidden-desktop ">
                <div data-aos="zoom-in">
                  <img
                    className="is-rounded"
                    src={ProfileImage}
                    alt="ProfileImage"
                  />
                </div>
              </figure>
              {/* icon */}
              <figure className="image is-icon-size is-align-items-center is-inline-block">
                <img className="is-square mt-6" src={Icon} alt="Icon" />
              </figure>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-full has-text-right">
            <div className="content">
              <h5 className="has-text-white">siluxvethz@gmail.com</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Heropage;
