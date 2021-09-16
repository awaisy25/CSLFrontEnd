import React, { useReducer, useState, useEffect } from "react";
import "./styles/Form.scss";
import { formChangeData } from "../reducers/FormData";
import { getData, postCalculations } from "../services/Calculator-api";
import {years, States} from "../utils/dataSets";
import ToolTip from "./ToolTip";
import FormResults from "./FormResults";
import Select from 'react-select';
//adding a comment
const Form = () => {
  //default form data
  const defaultData = {
    Years: years[0], //format for react select
    University: "", //will have as blank, because required field with needed validation
    in_state: false,
    Career: "", //will have as blank, because required field with needed validation
    State: States[0], //format for react select
    Budget: "",
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

  const selectHandleChange = (event, action) => {
    //console.log(event);
    //console.log(action);
    dispatch({
      name: action.name,
      value: event, //this is an object of value and label needed for react-select
    })
    //console.log(formData);
  }

  const clearForm = () => {
    dispatch({
      reset: true,
    });
    showError({exists: false, message: ''});
    setSubmitted(false);
  };


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
            &nbsp;<span className="field-title">Years in School (opt.):</span>
            <Select 
            options={years}
            value={formData.Years}
            isSearchable
            name="Years"
            onChange={selectHandleChange}
            />
          </label>

          <label>
          <ToolTip text="The University you select, the yearly tuition of that school will be part of the calculation." />
            &nbsp;<span className="field-title">University:</span>
            <Select
            options={unvData}
            value={formData.University}
            isSearchable
            name="University"
            onChange={selectHandleChange}
            />
             <input
             //select 2 doesn't have required field
             //having input that is hidden and will update when select above changes
            tabIndex={-1}
            autoComplete="off"
            required
            value={formData.University}
            onChange={() => {}} //does nothing used to avoid console error
            className="select-2-field-validation"
            />
          </label>

          <label className="state">
          <ToolTip text="Select this box if you live in the same state as the University selected" />
            &nbsp;<span className="field-title">In State:</span>
            <input
              type="checkbox"
              name="in_state"
              onChange={handleChange}
              value={formData.checkbox}
            />
          </label>

          <label>
          <ToolTip text="The career you want to pursue. Note the salary for each career differs by state" />
            &nbsp;<span className="field-title">Career Choice:</span>
            <Select
              options={careerData}
              value={formData.Career}
              isSearchable
              name="Career"
              onChange={selectHandleChange}
            />
            <input
            tabIndex={-1}
            autoComplete="off"
            required
            value={formData.Career}
            onChange={() => {}}
            className="select-2-field-validation"
            />
          </label>

          <label>
          <ToolTip text="The state to live in after college. This field is Not Required Can leave as is if you are unsure where you want to live after college" />
            &nbsp;<span className="field-title">State to live after school (opt.):</span>
            <Select 
              options={States}
              value={formData.State}
              isSearchable
              name="State"
              onChange={selectHandleChange}
            />
          </label>
          <label>
          <ToolTip text="How much money you plan to put towards tuition each year. This include scholarships & personal money. This is the amount contributed while in school" />
            &nbsp;<span className="field-title">Yearly amount paid towards Tuition ($):</span>
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
            &nbsp;<span className="field-title">Amount From Salary (%):</span>
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
            &nbsp;<span className="field-title">Interest Rate (%):</span>
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
