import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import EducationDetails from "./EducationDetails";

const educationData = [
  {
    id: 1,
    logo: "uf",
    university: "University Of Florida",
    degree: "Master of Science in Computer Science",
    duration: "August 2023 - May 2025",
    coursework:
      "Advanced Data Structures, Analysis of Algorithms, Data Engineering, Data Science, Computer Networks, Distributed Operating Systems, Software Engineering",
  },
  {
    id: 2,
    logo: "pes",
    university: "PES University",
    degree: "B.Tech in Electronics and Communication",
    duration: "August 2016 - June 2020",
    coursework:
      "Data Structures, Algorithms, Computer Networks, Operating Systems, Database Management System",
  },
];

function Section5() {
  return (
    <div
      className="section5 d-flex flex-column justiy-content-center align-tems-center pt-5"
      id="section_5"
    >
      <div className="education-title-wrapper d-flex justify-content-center align-items-center pt-5 mb-5">
        <h1 className="fw-bold">Education</h1>
      </div>
      <div className="section5-body d-flex flex-wrap justify-content-center align-items-strech p-1 p-lg-5">
        {educationData.map((edu) => (
          <EducationDetails key={edu.id} {...edu} />
        ))}
      </div>
    </div>
  );
}

export default Section5;
