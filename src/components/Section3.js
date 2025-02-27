import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import AccordionItem from "./AccordionItem"; // Import the AccordionItem component
import jobs from "../static/jobs.json"; // Import JSON statically

function Section3() {
  return (
    <div
      className="section3 d-flex flex-wrap justify-content-center align-items-start pt-5"
      id="section_3"
    >
      <div className="work-title-wrapper d-flex justify-content-center align-items-center pt-5 pb-5">
        <h1 className="fw-bold text-light">Work Experience</h1>
      </div>
      <div className="container work-content-wrapper">
        <div className="work-contents">
          <div className="accordion" id="accordionExample">
            {jobs.map((job, index) => (
              <AccordionItem
                key={index}
                index={index} // Pass the index to AccordionItem
                {...job} // Spread all properties of each job object as props
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
