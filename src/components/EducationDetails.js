import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import PES from "../static/pes.jpg";
import UF from "../static/UF.png";

const LogoMap = {
  pes: PES,
  uf: UF,
};
function EducationDetails({
  id,
  logo,
  university,
  degree,
  duration,
  coursework,
}) {
  return (
    <div
      key={id}
      className="education-details shadow  m-5 d-flex col-md-4 col-10 flex-column justify-content-start align-items-center"
    >
      <div className="clg-logo-wrapper ratio ratio-16x9 d-flex justify-content-center align-items-center">
        <img
          src={LogoMap[logo]}
          className="img-fluid"
          alt={`${university} logo`}
        ></img>
      </div>
      <div className="container m-1">
        <h3>{university}</h3>
      </div>
      <div className="container m-2">
        <p className="fs-5">
          <strong>{degree}</strong>
        </p>
        <p className="fs-5">{duration}</p>
      </div>
      <div className="container m-1">
        <p>
          <span className="fw-bold">Relevant Coursework:</span> {coursework}
        </p>
      </div>
    </div>
  );
}

export default EducationDetails;
