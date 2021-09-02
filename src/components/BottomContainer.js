import React from "react";
import "./styles/BottomContainer.css";

function BottomContainer() {
  return (
    <div className="bottomContainer">
      <div className="containerImg">
        <div className="bottomContainerAbout">
          <div className="aboutHeader">
            How Our <span id="bottom-calc-header">Calculator</span> Works
          </div>
          <p>
            For more information please see the{" "}
            <a
              style={{ color: "rgb(140, 48,48)", fontWeight: "bold" }}
              href="/faq/"
            >
              FAQ page
            </a>
          </p>

          <div className="paragraph-section">
            <p>
              Our calculator first works by getting the total amount of debt you
              will have after school based on university's tuition and how much
              money going towards tuition. This calculator assumes the tuition
              and amount paid towards tuition will be the same for each year you
              spend at school. Then it will get the salary based on your choice
              for career and state. If you didn't select a state then it will
              retrieve the average U.S salary for that career. We use three
              salary levels(entry, middle, senior) in this calculator. Assuming
              your salary increases over time. Then it will estimate the total
              number of months and the total amount going towards your student
              loans.
            </p>
          </div>
          <div className="app-header">
            Factors that are not included in this calculation
          </div>

          <ul className="list-style">
            <li>Taxes (State &amp; Federal)</li>
            <li>University dorming prices</li>
            <li>Cost of living in each state</li>
            <li>Interest rate charges while in school</li>
          </ul>

          <br />

          <div className="feedback">
            Have a minute?{" "}
            <a
              target="blank"
              style={{ color: "rgb(140, 48,48)", fontWeight: "bold" }}
              href="https://docs.google.com/forms/d/e/1FAIpQLScYlvtxvNgWn5zEEONSpHGMWjfQ5R0HlO_-XH8jyao96V0XKw/viewform?usp=sf_link"
            >
              We'd love your feedback!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomContainer;
