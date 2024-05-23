import React , {useState} from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "497433c2-de7b-43d4-8797-eb5412cb1bcb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("form submit succcessfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            soluta praesentium sequi quam asperiores vitae dolor commodi
            doloribus reiciendis non.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>Aniketikhar88@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9518926199</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>kfjnbdfndnvjdfnbvdf</p>
            </div>
          </div>
          
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" id="name " placeholder="Enter your name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" id="email " placeholder="Enter your email" />
            <label htmlFor="">write your message here</label>
            <textarea name="message" id="message" rows="8"></textarea>
            <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
