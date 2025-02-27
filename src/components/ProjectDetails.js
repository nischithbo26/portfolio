import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";

import eyantra from "../static/eyantra.jpg";
import KubernetesProject from "../static/KubernetesProject.jpg";
import NewsPapaper from "../static/NewsArticle.jpg";
import UFMarket from "../static/UFMarket.png";
import BitTorrent from "../static/BitTorrent.png";
import HackerRank from "../static/HackerRank.png";

const imageMap = {
  eyantra: eyantra,
  kubernetes: KubernetesProject,
  NLP: NewsPapaper,
  UFMarket: UFMarket,
  P2P: BitTorrent,
  BitTorrent: BitTorrent,
  HackerRank: HackerRank,
};

function ProjectDetails({ name, link, imgName, skills, description }) {
  return (
    <div className="container col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="container w-100  project-logo-wrapper">
          <img
            src={imageMap[imgName] || imgName}
            alt={name}
            className="rounded-circle img-fluid w-100"
          />
        </div>
        {link ? (
          <a href={link} className="m-3">
            <h4>{name}</h4>
          </a>
        ) : (
          <h4 className="m-3">{name}</h4>
        )}
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="fs-5">
          <strong>Skills:</strong> {skills}
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="fs-6">{description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
