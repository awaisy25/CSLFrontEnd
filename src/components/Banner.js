import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="bannerWrapper">
      <div className="banner">
        <div className="bannerLeft">
          <div className="bHeader">Calculate</div>
          <div className="bStudentHeader">Student Loans</div>
        </div>
        <div className="bannerRightOk">
          Unsure of how long it will take you to pay off your student loans
          after graduation? Use our Calculator to estimate how long & how much
          it will take you to pay off your student loans. Try it out!
        </div>
      </div>
    </div>
  );
}

export default Banner;
