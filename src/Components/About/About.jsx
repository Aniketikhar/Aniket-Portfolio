import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about-img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={about_img} alt="" width={400} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am currently pursuing a Master of Computer Application ( MCA )
              at G. H. Raisoni Institute of Engineering and Technology, Nagpur,
              building upon my strong foundation in the field. Previously, I
              successfully completed my Bachelor of Computer Application ( BCA )
              from RTMNU, Nagpur, where I honed my fundamental skills in the IT
              domain.
            </p>

            <p>
              Driven by my passion for technology, I am actively seeking
              opportunities within the dynamic field of IT. Proficient in a
              variety of web development languages including HTML, CSS, and
              JavaScript, as well as in PHP, I possess a strong understanding of
              the intricacies of web development. Additionally, my proficiency
              extends to programming languages such as C++ and Python, allowing
              me to approach problem-solving with a versatile and comprehensive
              skill set.
            </p>

            <p>
              My academic journey has instilled in me a deep commitment to
              excellence and a drive for continuous learning. With a keen eye
              for detail and a proactive approach, I am dedicated to delivering
              innovative solutions and contributing to the advancement of the IT
              industry.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievments">
        <div className="about-achievment">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        
        
      </div> */}
    </div>
  );
};

export default About;
