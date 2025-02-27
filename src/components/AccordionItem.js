import React, { useState } from "react";
import { ReactComponent as Icon } from "../static/location.svg";
import CommvaultLogo from "../static/cvlt.png"; // Import company logos // Example logo import

function AccordionItem(props) {
  const {
    title,
    company,
    from,
    to,
    location,
    summary,
    skills,
    jobDescription,
    index,
  } = props;

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // State to manage description visibility

  // Object mapping company names to logos
  const companyLogos = {
    Commvault: CommvaultLogo, // Mapping company name to logo\// Example mapping
    // Add more companies here as needed
  };

  const itemKey = `${title.replace(/\s+/g, "")}-${company.replace(
    /\s+/g,
    ""
  )}-${index}`; // Unique identifier including the index

  // Determine if this is the first accordion item (index 0)
  const isFirstItem = index === 0;

  // Toggle visibility of job description
  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="accordion-item work-item">
      <h3 className="accordion-header" id={`heading-${itemKey}`}>
        <button
          className={`accordion-button p-1 p-md-2 job-title-wrapper ${
            isFirstItem ? "show" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${itemKey}`} // Unique target
          aria-expanded={isFirstItem ? "true" : "false"} // Set 'true' for the first item
          aria-controls={`collapse-${itemKey}`}
        >
          <div className="container-fluid p-1 p-md-2 d-flex justify-content-between align-items-center">
            <div className="d-flex container p-0 justify-content-start align-items-center">
              <h4 className="container p-0 m-0 ">
                {title} @ {company}
              </h4>
            </div>
            <div className="d-flex container justify-content-end align-items-center">
              <h4 className="m-0">
                {from} - {to}
              </h4>
            </div>
          </div>
        </button>
      </h3>
      <div
        id={`collapse-${itemKey}`}
        className={`accordion-collapse collapse ${isFirstItem ? "show" : ""}`} // Add 'show' to the first item
        aria-labelledby={`heading-${itemKey}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body p-0 container text-center bg-dark accordion-body-section3">
          <div className="row work-summary-row">
            <div className="col-sm-3 p-2 d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                {/* Display the company logo dynamically */}
                <img
                  src={companyLogos[company] || CommvaultLogo} // Use fallback if company not found
                  alt={`${company} logo`}
                  className="company-logo"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="d-flex work-logo-wrapper justify-content-center align-items-center">
                <div className="d-flex location-icon-wrapper justify-content-center align-items-center pr-0">
                  <Icon />
                </div>
                <h6
                  style={{ color: "white" }}
                  className="text-start justify-content-start pt-3 pb-3 m-0"
                >
                  {location}
                </h6>
              </div>
            </div>
            <div
              className="col-sm-9 d-flex container flex-column justify-content-center align-items-center p-3"
              style={{ color: "white" }}
            >
              <p>{summary}</p>
              <div className="container p-2 d-flex flex-wrap justify-content-evenly align-items-center">
                {skills.map((skill, index) => (
                  <div key={index} className="job-skills">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job description section with collapsible functionality */}
          <div className="row work-details-row d-flex container flex-column">
            <div
              className={`collapse container ${
                isDescriptionVisible ? "show" : ""
              }`}
              id="job-description-container" // Unique ID for job description
            >
              <div className="d-flex container flex-column justify-content-center align-items-start white-text">
                <div className="d-flex container flex-column justify-content-center align-items-center white-text">
                  <h5 className="fw-bold d-flex container justify-content-center align-items-start mt-2">
                    Job Description
                  </h5>
                </div>
                <div className="d-flex container flex-column justify-content-center align-items-center white-text">
                  <ul className="text-start d-flex flex-column container justify-content-start  align-items-start mb-2 mt-2">
                    {jobDescription.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary show-description-button"
              type="button"
              onClick={toggleDescription}
            >
              <h6 className="fw-bold d-flex container justify-content-center align-items-start">
                {isDescriptionVisible
                  ? "Hide Job Description"
                  : "Show Job Description"}
              </h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
