import React, {useReducer, useState, useEffect} from 'react';
import './App.css';
import {formChangeData} from './reducers/FormData';
import {getData, postCalculations} from './services/Calculator-api';
import SelectOptions from './components/SelectOptions';

function App() {
  //default form data
  const defaultData = {
    Years: "1",
    University: "",
    in_state: false,
    Career: "",
    State: "US",
    Budget: 0,
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
   //call the REST Endpoint in Calculator-api
    postCalculations(formData);
 }

 const handleChange = event => {
   //if it is the checkbox field then need retrive value from property checked
   const isCheckbox = event.target.type === 'checkbox';
   dispatch({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value
   })
 }
//Array for states
 const States = [{id: "ALABAMA", title:"Alabama"},{id: "ALASKA", title:"Alaska"},{id: "ARIZONA", title:"Arizona"},
 {id: "ARKANSAS", title:"Arkansas"}, {id: "CALIFORNIA", title:"California"}, {id: "CONNETICUT", title:"Conneticut"},
 {id: "DELAWARE", title:"Delaware"}, {id: "FLORIDA", title:"Florida"}, {id: "GEORGIA", title:"Georgia"},
 {id: "HAWAII", title:"Hawaii"}, {id: "IDAHO", title:"Idaho"},{id: "ILLINOIS", title:"Illinois"}, {id: "INDIANA", title:"Indiana"},
 {id: "IOWA", title:"Iowa"}, {id: "KANSAS", title:"Kansas"}, {id: "COLORADO", title:"Colorado"}, {id: "KENTUCKY", title:"Kentucky"},
 {id: "LOUISIANA", title:"Lousiana"}, {id: "MAINE", title:"Maine"}, {id: "MARLYAND", title:"Maryland"}, {id: "MASSACHUSETTS", title:"Massachusetts"},
 {id: "MICHIGAN", title:"Michigan"}, {id: "MINNESOTA", title:"Minnesota"}, {id: "MISSISSIPPI", title:"Mississipi"},
 {id: "MISSOURI", title:"Missouri"}, {id: "NEBRASKA", title:"Nesbraka"}, {id: "NEVADA", title:"Nevada"}, {id: "NEW HAMPSHIRE", title:"New Hampshire"},
 {id: "NEW JERSEY", title:"New Jersey"}, {id: "NEW MEXICO", title:"New Mexico"}, {id: "NEW YORK", title:"New York"}, {id: "NORTH CAROLINA", title:"North Carolina"},
 {id: "NORTH DAKOTA", title:"North Dakota"}, {id: "OHIO", title: "Ohio"}, {id: "OKLAHOMA", title:"Oklahoma"},{id: "OREGON", title:"Oregon"}, 
 {id: "PENNSYLVANIA", title:"Pennsylvania"}, {id: "RHODE ISLAND", title:"Rhode Island"}, {id: "SOUTH CAROLINA", title:"South Carolina"},
 {id: "SOUTH DAKOTA", title:"South Dakota"}, {id: "TENNESSEE", title:"Tennesse"}, {id: "TEXAS", title:"Texas"}, {id: "UTAH", title:"Utah"},
 {id: "VERMONT", title:"Vermont"}, {id: "VIRGINIA", title:"Virginia"}, {id: "WASHINGTON", title:"Washington"}, {id: "WEST VRIGINIA", title:"West Virginia"},
 {id: "WISCONSIN", title:"Wisconsin"}, {id: "WYOMING", title:"Wyoming"}];

 const clearForm = () => {
   dispatch({
    reset: true
   });
   setSubmitted(false);
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
              <option value="5">5</option>
              <option value="6">6</option>
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
