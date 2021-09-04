import React from "react";
import './styles/Common.scss';
import './styles/FAQ.scss';
function FAQ() {
    const links =
    {
       ICU: "https://www.4icu.org/us/a-z/",
       gForms: "https://docs.google.com/forms/d/e/1FAIpQLScYlvtxvNgWn5zEEONSpHGMWjfQ5R0HlO_-XH8jyao96V0XKw/viewform?usp=sf_link"

    };
    return (
    <div className="FAQ-container">
    <h2 className="FAQ-header">Frequentley Asked Questions (FAQ)</h2>
        <div className="paragraph-section">
            <h3 className="page-header">How are college loans calculated?</h3>
            <p>
                Our calculator first works by getting the total amount of debt you will have after school based on university's tuition and 
                how much money going towards tuition. This calculator assumes the tuition and amount paid towards tuition will be 
                the same for each year you spend at school.  
            </p>
            <p>
                <strong>Note</strong> this calculator does not accumulate interest charges while in school. 
                Unsubsidized loans from the government charges interest while in school. 
                Depending on your private loan provider, could also charge interest while in school.
            </p>
        </div>
        <div className="paragraph-section">
        <h3 className="page-header">How does salary effect payoff time?</h3>
        <p>
            The income from your choice of career calculates how much you can put towards your loans each month. 
            A job with a higher income is capable of putting more money towards student loans than a job with a lower income. 
            For each job we get the entry level, middle level & senior level salary as part of the assumption you make more over time. 
            Each calculation will not include all three salaries. It varies based on the number of months. 
            The calculator first starts with the entry level salary. 
            Then as the number of months increase the salary will change to middle level salary then finally senior level salary.
        </p>
        <p> 
            <strong>Amount From Salary</strong> is the percentage from the job salary that goes towards paying off total student loan debt. 
            For example, if a job entry level salary is $100,000 a year and the number from Amount From Salary is 20%, then $20,000 a year(12 Months) will go towards paying off the total student loan amount. 
            You can put up to 100% of your salary towards repaying student loans, but this calculator does not include other expenses(Food, Rent).
        </p>
    </div>
        <div className="paragraph-section">
            <h3 className="app-header">Interest Rates?</h3>
            <p>
                Interest rates are one of the main reasons student loans take time to pay off. 
                Interest rates are the additional charges that gets paid to the loan provider in exchange for borrowing their money. 
                Interest rates vary based on the loan provider. Federal loan providers have the same rate for all borrowers.
            </p>
            <p>
                Interests rate are applied to the total amount you borrowed from the provider. 
                Students can have multiple different loan providers (Federal or Private). 
                For our calculator we assume the average interest rate of 5% even if there are more than one loan provider. 
                Interest rate charges are added to the total loan amount monthly. 
                If the amount from the job’s salary is less than the monthly interest rate charge then your student loan debt will increase. 
                In order to payoff your student loans you will need to pay more than the interest rate charge.
            </p>
        </div>
        <div className="paragraph-section">
       <h3 className="app-header">Data Resources?</h3>
        <p>We got the university tuition by looking through the university's listed through this site
            <a href={links.ICU} className="link" target="blank">https://www.4icu.org/us/a-z/.</a>
        </p>
        <p>Salary data for each job is researched through multiple online resources. We analyzed the data from multiple source to create the best possible assumption.
        </p>
        <p>If you are University that would like to correct the tuition that is shown on our site or someone that works in one of the jobs listed on our site 
            and can provide more insight. Please contact us at <strong>contact@calculatestudentloans.com</strong></p>
    </div>
    <div className="paragraph-section">
        <h3 className="app-header">Factors that are not included</h3>
        <ul className="list-style">
            <li>Taxes (State & Federal)</li>
            <li>University dorming prices</li>
            <li>Cost of living in each state</li>
            <li>Interest rate charges while in school</li>
        </ul>
    </div>
    </div>
    )
}

export default FAQ;