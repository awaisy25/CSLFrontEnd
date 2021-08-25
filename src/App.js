import React, {useReducer, useState, useEffect} from 'react';
import './App.css';
import {formChangeData} from './reducers/FormData';
import getData from './services/Calculator-api';
import SelectOptions from './components/SelectOptions';

function App() {
  //default form data
  const defaultData = {
    Years: "",
    University: "",
    in_state: false,
    Career: "",
    State: "US",
    Budget: "",
    percent_income: 20,
    interest_rate: 5
  }
  const [formData, dispatch] = useReducer(formChangeData, defaultData);
  const [isSubmit, setSubmitted] = useState(false);
  const [unvData, setUnvData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  //each render retrieve Career and University data from API
  useEffect(() => {
      getData('jandu')
        .then(data=> {
          //seeting the select options for career and university. The arrays will be passed to SelectOptions component
          setUnvData(data.Universities);
          setCareerData(data.Jobs);
        }).catch(error => {
          console.log(error);
        })
//array will make sure it only runs once
  }, []);

  const handleSubmit = event => {
   event.preventDefault();
   //set state to true, to show resulted data
   setSubmitted(true);
   alert('You have submitted the form.')
 }

 const handleChange = event => {
   //if it is the checkbox field then need retrive value from property checked
   const isCheckbox = event.target.type === 'checkbox';
   dispatch({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value
   })
 }

 const States = [{id: "ALABAMA", title:"Alabama"}];

 const clearForm = () => {
   dispatch({
    reset: true
   })
 }
  return(
    <div className="wrapper">
      <h1>Calculate Student Loans</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Years in School</p>
            <select name ="Years" onChange={handleChange} value={formData.Years}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>University</p>
             <SelectOptions name="University" change={handleChange} value={formData.University} items={unvData} />
          </label>
        </fieldset>
        <label>
          <p>In State:</p>  <input type="checkbox" name="in_state" onChange={handleChange} value={formData.checkbox}/>
        </label>
        <fieldset>
          <label>
            <p>Career</p>
            <SelectOptions name="Career" change={handleChange} value={formData.Career} items={careerData} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>State</p>
            <SelectOptions name="State" change={handleChange} value={formData.State} items={States} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Yearly amount paid towards Tuition ($)</p>
            <input type="number" name="Budget" placeholder="$0.00" min="0" max="100000" onChange={handleChange} required value={formData.Budget}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Amount From Salary (%)</p>
            <input type="number" name="percent_income" min="0" max="100" placeholder="% 0" onChange={handleChange} required value={formData.percent_income} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Interest Rate (%)</p>
            <input type="number" name="interest_rate" min="0" max="50" placeholder="% 0" onChange={handleChange} required value={formData.interest_rate} />
          </label>
        </fieldset> 
        <button type="submit">Submit</button>
        <input type="reset" onClick={clearForm} value="Reset" />
      </form>
      {isSubmit && 
        <div> 
          <h2>Results</h2>
          <ul>
            {
              // eslint-disable-next-line array-callback-return
              Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>: {value.toString()}</li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default App;
