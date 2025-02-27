import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import ProjectDetails from "./ProjectDetails";
import projects from "../static/projects.json"; // Import JSON statically

function Section4() {
  return (
    <div
      className="section4 d-flex flex-column justify-content-center align-items-center pt-5"
      id="section_4"
    >
      <div className="project-title-wrapper d-flex justify-content-center align-items-center pt-5">
        <h1 className="fw-bold">My Projects</h1>
      </div>
      <div className="container pt-3 mb-0 border-top d-flex justify-content-center align-items-center">
        <p className="d-flex justify-content-center align-items-center fs-5">
          I am continuously upskilling and curious about new technologies. I
          keep myself updated by working on various projects to gain hands-on
          experience with the latest trends and tools in the tech world.
        </p>
      </div>
      <div className="container-fluid pt-0">
        {projects.length > 0 ? (
          projects
            .reduce((rows, project, index) => {
              if (index % 3 === 0) rows.push([]); // Split into rows of 3 items
              rows[rows.length - 1].push(project); // Add project to current row
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="d-flex justify-content-center m-0 p-3 p-md-3 border-top flex-wrap align-items-start"
              >
                {row.map((project, index) => (
                  <ProjectDetails key={index} {...project} /> // Pass project data as props
                ))}
              </div>
            ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section4;
