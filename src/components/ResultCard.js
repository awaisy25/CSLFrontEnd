import React, { useEffect } from "react";
import "./styles/ResultCard.css";

function ResultCard({ formData, title, fee, paid, uni, debt, years }) {
  useEffect(() => {
    Object.entries(formData).map(([name, value, key]) => {
      <li key={name}>
        <strong>{name}</strong>: {value.toString()}
      </li>;
      console.log(`${name} : ${value.toString()}`);
    });
  }, []);
  return (
    <div className="resultCard">
      <div className="resultTitle">{title}</div>

      <div className="resultBody">
        <p>
          <span className="bold">{uni}</span> Yearly Tuition Fee:{" "}
          <span className="value">{fee}</span>
        </p>

        <p>
          Yearly Paid Amount: <span className="value">{paid}</span>
        </p>

        <p>
          Number of Years: <span className="value">{years}</span>
        </p>

        <p>
          Post-Education total student debt:{" "}
          <span className="value">{years}</span>
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
