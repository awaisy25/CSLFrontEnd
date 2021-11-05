/*
File to make REST API Calls to the calculator API to return the calculations
*/
import axios from 'axios'

//GET Request for retrieivng the Career and University Data from The Databases
export const getData = (param) => {
    console.log($CSL_API_KEY);
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
             ///have to rename the id and title property to value and label for react select
             const Universities = response.data.Universities.map(University => {
                return {value: University.id, label: University.title}
            })
            const Jobs = response.data.Jobs.map(Job => {
                return {value: Job.id, label: Job.title}
            })
            //adding original index at begggining of both arrays
            //Universities.unshift({value: "", label: "University"});
            //Jobs.unshift({value: "", label: "Career"});
            resolve({Universities, Jobs});
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
    return new Promise((resolve, reject) => {
        axios.get(url, {headers})
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error.response.data);
            })
    });
}
//POST Request to pass in the data from the Form and retrieve the calculations
export const postCalculations = async(data) => {
    const url = `https://1pf0hc31cf.execute-api.us-east-2.amazonaws.com/dev/calculations/`;
    //body data that will be passed in to the rest call
    const dataBody = {
        Job_ID: parseInt(data.Career.value),
        University_ID: parseInt(data.University.value),
        State: data.State.value,
        Years: parseInt(data.Years.value),
        Budget: parseInt(data.Budget),
        Percent_income: parseFloat(data.percent_income),
        Interest_rate: parseFloat(data.interest_rate),
        In_state: data.in_state
    }
    //console.log(dataBody);
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'ak5nedNedF9jtFeKW85Td6srqguurDYhd276Wtx9',
        Accept: '*/*'
    };
    return new Promise((resolve, reject) => {
        axios.post(url, dataBody, 
            {
            headers: headers
            })
            .then(response => {
                //console.log(response);
                resolve(response.data)
            })
            .catch(error => {
                //any error response with message in it is a custom error message
                if(error.response.data.message){
                    reject(error.response.data.message);
                }
                else{
                    console.log(error);
                    reject("Unexpected Error Occured Please Email contact@calculatestudentloans.com")
                }            
            })
    })
}