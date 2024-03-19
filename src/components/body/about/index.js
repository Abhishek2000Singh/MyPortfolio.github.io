import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello World !, I am,
         <br /> <span className="info-name">Abishek Singh</span>.
         <br /> I have experience working with Frontend and Java Development.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/mypic.jpg")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;