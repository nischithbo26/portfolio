import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import SkillSet from "./SkillSet";
import skillCategories from "../static/skills.json"; // Import the JSON file directly

function Section2() {
  return (
    <div className="section2 justify-content-center pt-5" id="section_2">
      <div className="skill-title-wrapper d-flex justify-content-center align-items-center pt-5">
        <h1 className="fw-bold">Technical Skills</h1>
      </div>
      <div className="container p-3">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillSet key={category} category={category} skills={skills} />
        ))}
      </div>
    </div>
  );
}

export default Section2;
