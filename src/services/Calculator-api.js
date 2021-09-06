/*
File to make REST API Calls to the calculator API to return the calculations
*/
import axios from 'axios'

//GET Request for retrieivng the Career and University Data from The Databases
export const getData = (param) => {
    const url = `https://1pf0hc31cf.execute-api.us-east-2.amazonaws.com/dev/${param}/`;
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'ak5nedNedF9jtFeKW85Td6srqguurDYhd276Wtx9',
        Accept: 'application/json'
    };
    return new Promise((resolve, reject) => {
        axios.get(url, {headers})
        .then(response => {
            //console.log(response);
            resolve(response.data);
        }).catch(error => {
            reject(error)
        })
    })
}

export const getUniversity = (id) => {
    const url = `https://1pf0hc31cf.execute-api.us-east-2.amazonaws.com/dev/universities/${id}`;
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'ak5nedNedF9jtFeKW85Td6srqguurDYhd276Wtx9',
        Accept: 'application/json'
    };
    axios.get(url, {headers})
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error.response);
    })
}
//POST Request to pass in the data from the Form and retrieve the calculations
export const postCalculations = async(data) => {
    const url = `https://1pf0hc31cf.execute-api.us-east-2.amazonaws.com/dev/calculations/`;
    //body data that will be passed in to the rest call
    const dataBody = {
        Job_ID: parseInt(data.Career),
        University_ID: parseInt(data.University),
        State: data.State,
        Years: parseInt(data.Years),
        Budget: parseInt(data.Budget),
        Percent_income: parseInt(data.percent_income),
        Interest_rate: parseInt(data.interest_rate),
        In_state: data.in_state
    }
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'ak5nedNedF9jtFeKW85Td6srqguurDYhd276Wtx9',
        Accept: '*/*'
    };
  
    axios.post(url, dataBody, 
        {
        headers: headers
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            //any error response with message in it is a custom error message
            if(error.response.data.message){
                console.log(error.response);
            }
            else{
                console.log(error);
            }            
        })
}