import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Add Bootstrap JS
import "../css/custom2.css";
import { ReactComponent as DownloadIcon } from "../static/download.svg";
import links from "../static/links.json"; // Import JSON statically

function NavBar() {
  return (
    <div className="nav-wrapper d-flex justify-content-center fixed-top">
      <nav className="navbar navbar-expand-lg navbar-custom" id="nav-bar">
        <div className="container navbar-brand-wrapper">
          {/* Brand/Logo */}
          <a href="/portfolio" className="navbar-brand mx-auto mx-lg-0">
            Nischith B O
          </a>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link" href="#section_1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#section_2">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#section_3">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#section_4">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#section_5">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#section_6">
                  Contact
                </a>
              </li>
            </ul>

            {/* Resume Download Button */}
            <div className="d-lg-flex align-items-center ms-auto">
              {links.resume && ( // Only show if resume link exists
                <a
                  className="custom-btn btn bg-white"
                  href={links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="container d-flex justify-content-evenly w-100 align-items-center">
                    <DownloadIcon style={{ width: "25px", height: "25px" }} />
                    <h6 className="text-black ms-lg-1 d-flex justify-content-center align-items-center m-0 p-1">
                      Resume
                    </h6>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
