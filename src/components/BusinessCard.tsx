import React from "react";
import "./BusinessCard.css";

function BusinessCard() {
  return (
    <div className="business-card">
      <img
        className="home-page-avatar"
        // src="https://github.com/rubikvn2100/personal_website/blob/main/public/avatar/avatar_128.jpg?raw=true"
        src={process.env.PUBLIC_URL + "/avatar/avatar_128.jpg"}
        alt="My avatar"
      />
      <span className="business-card-name">Khoa Le</span>
      <div className="business-card-seperator"></div>
      <span className="business-card-job-title">Software Engineer</span>
      <p className="business-card-description">
        I want to improve the quality of life for everyone by creating software
        that is reliable and easy to use. I am especially interested in
        integrating Artificial Intelligence into products, which can help people
        reduce unnecessary manual tasks so that they have more freedom in doing
        what they want.
      </p>
      <div className="business-card-contact">
        <a href="https://github.com/rubikvn2100">
          <img
            src={process.env.PUBLIC_URL + "/icons/logo-github.svg"}
            alt="Github logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/khoale2100/">
          <img
            src={process.env.PUBLIC_URL + "/icons/logo-linkedin.svg"}
            alt="Linkedin logo"
          />
        </a>
        <a href="https://youtu.be/NySCUOnjZss">
          <img
            src={process.env.PUBLIC_URL + "/icons/logo-youtube.svg"}
            alt="Youtube logo"
          />
        </a>
      </div>
    </div>
  );
}

export default BusinessCard;
