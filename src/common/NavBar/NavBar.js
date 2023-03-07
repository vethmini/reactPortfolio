import React from "react";
import "./NavBar.css";
import logo from "./assets/logo.jpg";

function NavBar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item py-0 my-0 px-2" href="#1">
          <img src={logo} style={{ maxHeight: "50px" }} alt="Logo" />
        </a>
        <a
          href="#1"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-name">
        <div className="navbar-start navbar-item ">
          <h1 className="title is-5 mt-4 has-text-white">SILUNI ALAHAKOON</h1>{" "}
        </div>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <a className="navbar-item has-text-white" href="#home">
            Home
          </a>

          <a className="navbar-item has-text-white" href="#about">
            About
          </a>

          <a className="navbar-item has-text-white" href="#education">
            Education
          </a>

          <a className="navbar-item has-text-white" href="#professional">
            Professional skills
          </a>

          <a className="navbar-item has-text-white" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div>
        <button className="button is-button is-rounded px-6 my-1 has-text-black-bis">
          hello@vethz
        </button>
      </div>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
