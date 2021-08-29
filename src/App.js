import React, {useReducer, useState, useEffect} from 'react';
import './App.css';
import {formChangeData} from './reducers/FormData';
import {getData, postCalculations} from './services/Calculator-api';
import SelectOptions from './components/SelectOptions';
import Form from './components/Forms';

function App() {
   
  return(
    <div className="App">
       <Form/>
    </div>
  )
}

export default App;
