import React, { useReducer, useState, useEffect } from "react";
import "./styles/Form.scss";
import { formChangeData } from "../reducers/FormData";
import { getData, postCalculations, getUniversity } from "../services/Calculator-api";
import {years, States} from "../utils/dataSets";
import ToolTip from "./ToolTip";
import FormResults from "./FormResults";
import FeedbackModal from "./FeedbackModal";
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
  const [isStateSchool, checkStateSchool] = useState(false);
  const [submitCounter, setSubmitCounter] = useState(0); //this will value be stored in browser as session storage
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    //each render retrieve Career and University data from API
    getData("jandu")
      .then((data) => {
        //setting the select options for career and university. The arrays will be passed to SelectOptions component
        setUnvData(data.Universities);
        setCareerData(data.Jobs);
      })
      .catch((error) => {
        console.log(error);
      });
      //getting the submit counter from browser storage. this helps with managing state when refreshing page or switching pages
      const storedSubmitCounter = parseInt(sessionStorage.getItem('submitCounterStored') || "0");
      setSubmitCounter(storedSubmitCounter);
    //array will make sure it only runs once
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      //increment submit counter in state and browser storage. once it is 3 show feedback modal
      setSubmitCounter(submitCounter + 1);
      sessionStorage.setItem("submitCounterStored", submitCounter + 1);
      //have to add one because increments in dom right away not in state code
      if(submitCounter + 1 === 3) {
        //console.log("counter from submission: " + (submitCounter + 1));
        setTimeout(() => {
          setModalVisible(true);
        }, 3000); //show after 3 seconds
      }
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
  }

  const UniversityHandleChange = (event,action) => {
    getUniversity(event.value) //university id  is in the object propery value
      .then(data => {
        //if in  state tuition * out of state tuition are the same then it;s not a state school
        if (data.in_state === data.out_state) {
            checkStateSchool(false);
            dispatch({
              resetStateCheck: true
            })
        //when they are the same then show in state chech box
        } else {
          checkStateSchool(true);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        //this error should be false from the rest call to display the in state checkbox to hidden
        checkStateSchool(false);
        dispatch({
          resetStateCheck: true
        })
      })
    //updating university state
    dispatch({
      name: action.name,
      value: event, //this is an object of value and label needed for react-select
    })
  }

  const clearForm = () => {
    dispatch({
      reset: true,
    });
    //clear form result component, erro messages &in state checkboxes
    showError({exists: false, message: ''});
    setSubmitted(false);
    checkStateSchool(false);
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
            onChange={UniversityHandleChange}
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
            { isStateSchool && (
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
            )}
          

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
        {<FeedbackModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>}
        {isError.exists && <span className="errorMessage">{isError.message}</span>}
      </form>
      { isSubmit && (
        <FormResults data={calcResults}/>
      )}
    </div>
  );
};

export default Form;
