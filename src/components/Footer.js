import React from "react";
import fb from "../assets/Facebook.png";
import tw from "../assets/Twitter.png";
import ln from "../assets/Linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="footerLeftHeader">Share On</div>
        <div className="footerLeftImages">
          <img src={fb} alt="" width="30" height="30" />
          <img src={tw} alt="" width="30" height="30" />
          <img src={ln} alt="" width="30" height="30" />
        </div>
      </div>

      <div className="footerMid">
        <div>About Us</div>
        <div>Privacy</div>
        <div>FAQ</div>
      </div>

      <div className="footerRight">
        <div>contact@calculatestudentloans.com</div>
        <div>© 2021 Calculate Student Loans</div>
      </div>
    </div>
  );
}

export default Footer;
