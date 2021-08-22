import React, {useReducer, useState} from 'react';
import './App.css';

const formChangeData = (state, event) => {
  //console.log(`Key: ${event.name}, Value: ${event.value}`)
  return {
    //JavaScript spread .. gets rest of the data
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, dispatch] = useReducer(formChangeData, {});
  const [isSubmit, setSubmitted] = useState(false);

  const handleSubmit = event => {
   event.preventDefault();
   setSubmitted(true);
   alert('You have submitted the form.')
 }

 const handleChange = event => {
   dispatch({
     name: event.target.name,
     value: event.target.value
   })
 }

  return(
    <div className="wrapper">
      <h1>Calculate Student Loans</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
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
