import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] =  useState("home");

  return (
    <div className="navbar">
      <h1>Aniket Ikhar</h1>

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link"  href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          { menu === "home"? <img src={underline} alt="home" /> : <></>}
          
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          { menu === "about"? <img src={underline} alt="about" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#skills'>
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          { menu === "skills"? <img src={underline} alt="skills" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#project'>
            <p onClick={() => setMenu("project")}>Projects</p>
          </AnchorLink>
          { menu === "project"? <img src={underline} alt="project" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#contact'>
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          { menu === "Contact"? <img src={underline} alt="contact" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
