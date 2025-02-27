import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom2.css";
import { ReactComponent as LinkedInLogo } from "../static/linkedin.svg";
import { ReactComponent as GithubLogo } from "../static/github.svg";
import { ReactComponent as PhoneLogo } from "../static/phone.svg";
import { ReactComponent as GmailLogo } from "../static/gmail.svg";
import emailjs from "emailjs-com";
import links from "../static/links.json"; // Import JSON statically

function Section6() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uc6ab5w",
        "template_8nk1a8d",
        formData,
        "ercvWbE25PC0z2Rcm"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div
      className="section6 d-flex flex-column justify-content-center align-items-center"
      id="section_6"
    >
      {/* Title Section */}
      <div className="connect-title-wrapper d-flex justify-content-center align-items-center p-3">
        <h1 className="fw-bold">Contact</h1>
      </div>

      {/* Main Content */}
      <div className="section6-body d-flex flex-wrap justify-content-center align-items-center p-1 p-lg-5">
        {/* Contact Form */}
        <div className="p-2 container col-10 col-lg-7 d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="text-center fw-bold">
            Please send a message if you want to know more about me or have a
            potential opportunity.
          </p>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
              <input
                className="form-control shadow"
                id="name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control shadow"
                id="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control shadow"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 shadow">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="container shadow col-10 col-lg-4 border rounded d-flex flex-column justify-content-center align-items-center p-4">
          <h4 className="mb-3 p-3">Let’s Connect!</h4>
          <div className="row container d-flex flex-wrap justify-content-center align-items-center gap-3 m-1 m-md-2">
            {links.linkedin && (
              <div className="col-5 d-flex justify-content-center">
                <a href={links.linkedin} className="social-icon">
                  <LinkedInLogo />
                </a>
              </div>
            )}
            {links.github && (
              <div className="col-5 d-flex justify-content-center">
                <a href={links.github} className="social-icon">
                  <GithubLogo />
                </a>
              </div>
            )}
          </div>
          <div className="row container d-flex flex-wrap justify-content-center align-items-center gap-3 m-2">
            {links.gmail && (
              <div className="col-5 d-flex justify-content-center">
                <a href={links.gmail} className="social-icon">
                  <GmailLogo />
                </a>
              </div>
            )}
            {links.phone && (
              <div className="col-5 d-flex justify-content-center">
                <a href={links.phone} className="social-icon">
                  <PhoneLogo />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
