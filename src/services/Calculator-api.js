/*
File to make REST API Calls to the calculator API to return the calculations
*/
import axios from 'axios'

const getData = async(param) => {
    const url = `https://1pf0hc31cf.execute-api.us-east-2.amazonaws.com/dev/${param}/`;
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'IHCVXdhsFt8cDzezfc7KIaEMR457ENvR9Q9ybbqJ',
        Accept: 'application/json'
    };
    return new Promise((resolve, reject) => {
        axios.get(url, {headers})
        .then(response => {
            console.log(response);
            resolve(response.data);
        }).catch(error => {
            reject(error)
        })
    })
}

export default getData;