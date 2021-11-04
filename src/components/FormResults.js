/*
Component to display the results after a successful form Submission
*/ 

import React from 'react';
import "../components/styles/FormResults.scss"

function FormResults(props) {
    //const Budget = props.budget;
    const {
        University, //will hold the university name, both in state and out state tuition
        Budget,
        Years,
        In_state,
        Loan_total,
        Job, //this is returned as an object {id, title}
        State,
        Salary, //salary pbject will hold, entry, middle, and senior salary
        Time, //this the numbe of months
        Interest_paid,
        Total_paid
    } = props.data
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
                <p><strong>{University.title}</strong> {In_state ? "in State": ""} Yearly Tuition Fees: <span className="result-value">
                ${In_state ? University.in_state.toLocaleString() : University.out_state.toLocaleString()}</span></p>
                <p><strong>Amount paid</strong> towards yearly tuition: <span className="result-value">${Budget.toLocaleString()}</span></p>
                <p>Number of years in school: <span className="result-value">{Years}</span></p>
                <p>Post-education total student debt: <span className="result-value">${Loan_total.toLocaleString()}</span></p>
              </div>
            </div>
            <div className="card cards-style"> 
              <div className="card-header card-headers-style">
                  {Job.title} Average Salary in {State}
              </div>
              <div className="card-body">
                      <p><strong>Entry Level: </strong><span className="result-value">${Salary.entry.toLocaleString()}</span></p>
                      <p><strong>Middle Level: </strong><span className="result-value">${Salary.middle.toLocaleString()}</span></p>
                      <p><strong>Senior Level: </strong><span className="result-value">${Salary.senior.toLocaleString()}</span></p>
              </div>
            </div>
            <div className="card cards-style"> 
              <div className="card-header card-headers-style">
                  Estimated Payoff:
              </div>
              <div className="card-body">
                <p><strong>Months to Payoff</strong> your Student Loans: <span className="result-value">{Time}</span></p>
                <p>Total payment towards <strong>Interest: </strong><span className="result-value">${Interest_paid.toLocaleString()}</span></p>
                <p>Total payment towards <strong>Loans & Interest: </strong><span className="result-value">${Total_paid.toLocaleString()}</span></p>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    )
}


export default FormResults;