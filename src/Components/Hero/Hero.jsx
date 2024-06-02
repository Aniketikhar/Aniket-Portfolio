import React from "react";
import "./Hero.css";
import profile_img from "../../assets/aniket.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" width={250} />
      <h1>
        <span>I'm Aniket Ikhar</span>
      </h1>
      <section class="animation">
        <div class="first">
          <div>Front End Developer</div>
        </div>
        <div class="second">
          <div>Back End Developer</div>
        </div>
        <div class="third">
          <div>Full Stack Developer </div>
        </div>
      </section>
      <p>
      Self-motivated and hardworking fresher seeking an opportunity to work in a challenging environment to prove my
skills and utilise my knowledge & intelligence in the growth of the organisation.

      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1VNeuUc9qBhFOb64W3antxqDvi0RFF-kE/view?usp=sharing" target="blank">My Resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
