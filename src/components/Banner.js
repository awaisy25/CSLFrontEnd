import React from "react";
import "./styles/Banner.scss";

function Banner() {
  return (
    <div className="bannerWrapper">
      <div className="banner">
        <div className="bannerLeft">
          <h2 className="bHeader">Calculate</h2>
          <h2 className="bStudentHeader">Student Loans</h2>
        </div>
        <p className="bannerRightOk">
          Unsure of how long it will take you to pay off your student loans
          after graduation? Use our Calculator to estimate how long & how much
          it will take you to pay off your student loans. Try it out!
        </p>
      </div>
    </div>
  );
}

export default Banner;
