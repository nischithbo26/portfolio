import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import SkillIcon from "./SkillIcon"; // Assuming this component is rendering the skill icons

function SkillSet({ category, skills }) {
  return (
    <div className="row skill-set-row m-sm-5 m-2 shadow p-3">
      <div className="col-lg-3 skill-set-item d-flex justify-content-center align-items-center">
        <h3>{category}</h3> {/* Displaying the category dynamically */}
      </div>
      <div className="col-lg-9 d-flex skill-set-item justify-content-evenly align-items-center flex-wrap">
        {skills.map((skill, index) => (
          <SkillIcon key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillSet;
