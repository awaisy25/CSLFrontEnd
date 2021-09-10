import React, { useReducer, useState, useEffect } from "react";
import "./styles/Form.scss";
import { formChangeData } from "../reducers/FormData";
import { getData, postCalculations } from "../services/Calculator-api";
import SelectOptions from "./SelectOptions";
import ToolTip from "./ToolTip";
import FormResults from "./FormResults";
//adding a comment
const Form = () => {
  //default form data
  const defaultData = {
    Years: "1",
    University: "",
    in_state: false,
    Career: "",
    State: "US",
    Budget: 0,
    percent_income: 20,
    interest_rate: 5,
  };
  const [formData, dispatch] = useReducer(formChangeData, defaultData);
  const [isSubmit, setSubmitted] = useState(false);
  const [unvData, setUnvData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  const [calcResults, setCalcResults] = useState({}); 
  const [isError, showError] = useState({exists: false, message: ""});
  //each render retrieve Career and University data from API
  useEffect(() => {
    getData("jandu")
      .then((data) => {
        //seeting the select options for career and university. The arrays will be passed to SelectOptions component
        setUnvData(data.Universities);
        setCareerData(data.Jobs);
      })
      .catch((error) => {
        console.log(error);
      });
    //array will make sure it only runs once
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //call the REST Endpoint in Calculator-api. Have it retrieve the data before showing the results
      const data = await postCalculations(formData);
      setCalcResults(data);
      //show the results section
      showError({exists: false, message: ''});
      setSubmitted(true);
    } catch(error){
      setSubmitted(false);
      //updating error object if custom error message is recieved
      showError({exists:true, message: error})
    }
   
    
  };

  const handleChange = (event) => {
    //if it is the checkbox field then need retrive value from property checked
    const isCheckbox = event.target.type === "checkbox";
    dispatch({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const clearForm = () => {
    dispatch({
      reset: true,
    });
    showError({exists: false, message: ''});
    setSubmitted(false);
  };
  const States = [
    { id: "ALABAMA", title: "Alabama" },
    { id: "ALASKA", title: "Alaska" },
    { id: "ARIZONA", title: "Arizona" },
    { id: "ARKANSAS", title: "Arkansas" },
    { id: "CALIFORNIA", title: "California" },
    { id: "CONNETICUT", title: "Conneticut" },
    { id: "DELAWARE", title: "Delaware" },
    { id: "FLORIDA", title: "Florida" },
    { id: "GEORGIA", title: "Georgia" },
    { id: "HAWAII", title: "Hawaii" },
    { id: "IDAHO", title: "Idaho" },
    { id: "ILLINOIS", title: "Illinois" },
    { id: "INDIANA", title: "Indiana" },
    { id: "IOWA", title: "Iowa" },
    { id: "KANSAS", title: "Kansas" },
    { id: "COLORADO", title: "Colorado" },
    { id: "KENTUCKY", title: "Kentucky" },
    { id: "LOUISIANA", title: "Lousiana" },
    { id: "MAINE", title: "Maine" },
    { id: "MARLYAND", title: "Maryland" },
    { id: "MASSACHUSETTS", title: "Massachusetts" },
    { id: "MICHIGAN", title: "Michigan" },
    { id: "MINNESOTA", title: "Minnesota" },
    { id: "MISSISSIPPI", title: "Mississipi" },
    { id: "MISSOURI", title: "Missouri" },
    { id: "NEBRASKA", title: "Nesbraka" },
    { id: "NEVADA", title: "Nevada" },
    { id: "NEW HAMPSHIRE", title: "New Hampshire" },
    { id: "NEW JERSEY", title: "New Jersey" },
    { id: "NEW MEXICO", title: "New Mexico" },
    { id: "NEW YORK", title: "New York" },
    { id: "NORTH CAROLINA", title: "North Carolina" },
    { id: "NORTH DAKOTA", title: "North Dakota" },
    { id: "OHIO", title: "Ohio" },
    { id: "OKLAHOMA", title: "Oklahoma" },
    { id: "OREGON", title: "Oregon" },
    { id: "PENNSYLVANIA", title: "Pennsylvania" },
    { id: "RHODE ISLAND", title: "Rhode Island" },
    { id: "SOUTH CAROLINA", title: "South Carolina" },
    { id: "SOUTH DAKOTA", title: "South Dakota" },
    { id: "TENNESSEE", title: "Tennesse" },
    { id: "TEXAS", title: "Texas" },
    { id: "UTAH", title: "Utah" },
    { id: "VERMONT", title: "Vermont" },
    { id: "VIRGINIA", title: "Virginia" },
    { id: "WASHINGTON", title: "Washington" },
    { id: "WEST VRIGINIA", title: "West Virginia" },
    { id: "WISCONSIN", title: "Wisconsin" },
    { id: "WYOMING", title: "Wyoming" },
  ];

  return (
    <div className={isSubmit ? "formAndData": "form"}>
      <form onSubmit={handleSubmit}>
        <div className="form-para">
          <p className="para1">Fill the form below to get your results:</p>
          <p className="para2">(All fields are required unless specified)</p>
        </div>
        <div className="calc-fields">
          <label>
            <ToolTip text="The number of years you will spend at your selected University" />
            &nbsp;Years in School (opt.):
            <select
              className="select"
              name="Years"
              onChange={handleChange}
              value={formData.Years}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>

          <label>
          <ToolTip text="The University you select, the yearly tuition of that school will be part of the calculation." />
            &nbsp;University:
            <SelectOptions
              name="University"
              change={handleChange}
              value={""}
              items={unvData}
            />
          </label>

          <label className="state">
          <ToolTip text="Select this box if you live in the same state as the University selected" />
            &nbsp;In State:
            <input
              type="checkbox"
              name="in_state"
              onChange={handleChange}
              value={formData.checkbox}
            />
          </label>

          <label>
          <ToolTip text="The career you want to pursue. Note the salary for each career differs by state" />
            &nbsp;Career Choice:
            <SelectOptions
              name="Career"
              change={handleChange}
              value={""}
              items={careerData}
            />
          </label>

          <label>
          <ToolTip text="The state to live in after college. This field is Not Required Can leave as is if you are unsure where you want to live after college" />
            &nbsp;State to live after school (opt.):
            <SelectOptions
              name="State"
              change={handleChange}
              value={"US"}
              items={States}
            />
          </label>
          <label>
          <ToolTip text="How much money you plan to put towards tuition each year. This include scholarships & personal money. This is the amount contributed while in school" />
            &nbsp;Yearly amount paid towards Tuition ($):
            <input
              className="input"
              type="number"
              name="Budget"
              placeholder="$0.00"
              min="0"
              max="100000"
              onChange={handleChange}
              required
              value={formData.Budget}
            />
          </label>
          <label>
          <ToolTip text="The percent of your income that goes towards your student loan payments. Note the default is 20%, but can be higher depending on interest rate." />
            &nbsp;Amount From Salary (%):
            <input
              className="input"
              type="number"
              name="percent_income"
              min="0"
              max="100"
              step="any"
              placeholder="% 0"
              onChange={handleChange}
              required
              value={formData.percent_income}
            />
          </label>
          <label>
          <ToolTip text="The average interest rate for your loans. Default is 5%" />
            &nbsp;Interest Rate (%):
            <input
              className="input formLast"
              type="number"
              name="interest_rate"
              min="0"
              max="50"
              step="any"
              placeholder="% 0"
              onChange={handleChange}
              required
              value={formData.interest_rate}
            />
          </label>

          <div className="buttonWrapper">
            <button id="submit" type="submit">
              Calculate
            </button>
            <input id="reset" type="reset" onClick={clearForm} value="Clear" />
          </div>
        </div>
        {isError.exists && <span className="errorMessage">{isError.message}</span>}
      </form>
      { isSubmit && (
        <FormResults data={calcResults}/>
      )}
    </div>
  );
};

export default Form;
