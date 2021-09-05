import React from "react";
import fb from "../assets/Facebook.png";
import tw from "../assets/Twitter.png";
import ln from "../assets/Linkedin.png";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";

function Footer() {
  //for links need to use JSX syntax to style them
  const linkStyle= {
    textDecoration: "none",
    color: "white",
  };
  //links for sharing on social pages
  const links = {
    fb: "http://www.facebook.com/sharer.php?u=https://www.calculatestudentloans.com/",
    tw: "https://twitter.com/share?url=https://www.calculatestudentloans.com/&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons",
    ln: "http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.calculatestudentloans.com/"
  }
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="footerLeftHeader">Share On</div>
        <div className="footerLeftImages">
          <a href={links.fb} target="_blank" rel="noreferrer"><img src={fb} alt="" width="30" height="30" /></a>
          <a href={links.tw} target="_blank" rel="noreferrer"><img src={tw} alt="" width="30" height="30" /> </a>
          <a href={links.ln} target="_blank" rel="noreferrer"><img src={ln} alt="" width="30" height="30" /> </a>
        </div>
      </div>

      <ul className="footerMid">
        <li><Link to="/about" style={linkStyle}>About Us </Link></li>
        <li><Link to="/privacy" style={linkStyle}>Privacy</Link></li>
        <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
      </ul>

      <ul className="footerRight">
        <li>contact@calculatestudentloans.com</li>
        <li>© 2021 Calculate Student Loans</li>
      </ul>
    </div>
  );
}

export default Footer;
