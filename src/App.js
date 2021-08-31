import React, {useReducer, useState, useEffect} from 'react';
import './App.css';
import {formChangeData} from './reducers/FormData';
import {getData, postCalculations} from './services/Calculator-api';
import SelectOptions from './components/SelectOptions';
import Form from './components/Forms';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

function App() {
   
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
       <Form/>
    </div>
  )
}

export default App;
