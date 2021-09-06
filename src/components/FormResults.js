/*
Component to display the results after a successful form Submission
*/ 

import React from 'react';
import "../components/styles/FormResults.scss"

function FormResults(props) {
    return (
    <React.Fragment>
        <div className="line-seperator"></div>
        <div className="results-section">
          <div className="results-header">
                <p>Check your results below:</p>
          </div>

          <div className="cards-list">
            <div className="card cards-style">
              <div className="card-header card-headers-style">
                Loan Breakdown:
              </div>
              <div className="card-body">
                <p><strong>Alabama A&M University</strong> Yearly Tuition Fees: <span className="result-value">$22,078</span></p>
                <p><strong>Amount paid</strong> towards yearly tuition: <span className="result-value">$5000</span></p>
                <p>Number of years in school: <span className="result-value">4</span></p>
                <p>Post-education total student debt: <span className="result-value">$68,312</span></p>
              </div>
            </div>
            <div className="card cards-style"> 
              <div className="card-header card-headers-style">
                  Business Analyst Average Salary in Alabama
              </div>
              <div className="card-body">
                      <p><strong>Entry Level: </strong><span className="result-value">$67,552</span></p>
                      <p><strong>Middle Level: </strong><span className="result-value">$75,034</span></p>
                      <p><strong>Senior Level: </strong><span className="result-value">$79,357</span></p>
              </div>
            </div>
            <div className="card cards-style"> 
              <div className="card-header card-headers-style">
                  Estimated Payoff:
              </div>
              <div className="card-body">
                <p><strong>Months to Payoff</strong> your Student Loans: <span className="result-value">67</span></p>
                <p>Total payment towards <strong>Interest: </strong><span className="result-value">$10,320</span></p>
                <p>Total payment towards <strong>Loans & Interest: </strong><span className="result-value">$78,632</span></p>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    )
}


export default FormResults;