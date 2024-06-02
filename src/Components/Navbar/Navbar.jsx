import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0px";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <h1>Aniket</h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} className="nav-mob-close" onClick={closeMenu} alt=''  />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} style={{transition: "0.5s"}} alt="home" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="about" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src={underline} alt="skills" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p onClick={() => setMenu("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="project" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={underline} alt="contact" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
