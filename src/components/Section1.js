import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import myImage from "../static/Pic.jpg"; // Your image import
import { ReactComponent as DownloadIcon } from "../static/download.svg";
import profileData from "../static/profile.json"; // Importing profile data

function Section1() {
  return (
    <div
      className="section1 d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="card w-75 relative">
        {/* Profile Image */}
        <div className="img-wrap">
          <img
            src={myImage}
            className="hero-image img-fluid"
            alt="Profile of the author"
          />
        </div>

        {/* Profile Name and Title */}
        <div className="title-wrap">
          <h2>{profileData.name}</h2>
          <p className="mb-1">
            <strong>{profileData.title}</strong>
          </p>
        </div>

        {/* Profile Summary with HTML content */}
        <div
          className="summary-wrap mb-2 p-1"
          dangerouslySetInnerHTML={{ __html: profileData.summary }}
        />

        {/* Explore Profile Button */}
        <div className="mb-4 d-none d-lg-block">
          <a className="custom-btn btn custom-link fs-6" href="#section_2">
            Explore my Profile
          </a>
        </div>

        {/* Resume Button for Mobile */}
        <p className="mb-4 d-block d-lg-none">
          <a
            className="custom-btn btn custom-link border bg-light"
            href={profileData.resume} // Direct link from the JSON file
          >
            <div className="container d-flex justify-content-evenly w-100 align-items-center">
              <DownloadIcon style={{ width: "25px", height: "25px" }} />
              <div className="text-black ms-lg-1 d-flex justify-content-center align-items-center m-0 p-1">
                Resume
              </div>
            </div>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Section1;
