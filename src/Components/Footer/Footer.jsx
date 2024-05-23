import React from 'react';
import "./Footer.css";
import user_icon from '../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Aniket Ikhar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptates.</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" />
                </div>
                <div className="footer-subs">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            © 2024 Aniket Ikhar. All Rights Reserved.
            </div>
            <div className="footer-bottom-right">
                <p>Lorem ipsum dolor sit amet.</p>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
