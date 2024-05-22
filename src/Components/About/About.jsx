import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, optio! Pariatur, rem, iure ullam expedita sunt dolores
              laudantium quaerat mollitia in voluptatem molestiae atque ex.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              maiores molestias hic eum repellat! Voluptas sapiente earum
              suscipit neque error reprehenderit dicta, nisi excepturi aliquid?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>
            <hr style={{ width: "50%" }} />
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>
            <hr style={{ width: "50%" }} />
            <div className="about-skill">
              <p>HTML & CSS</p> 
            </div>
            <hr style={{ width: "50%" }} />
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>
            <hr style={{ width: "50%" }} />
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievments">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievments">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievments">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievments">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />

    </div>
  );
};

export default About;
