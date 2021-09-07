export const formChangeData = (state, event) => {
    //console.log(`Key: ${event.name}, Value: ${event.value}`)
    if(event.reset) {
      return {
        Years: "1",
        University: "",
        in_state: false,
        Career: "",
        State: "US",
        Budget: 0,
        percent_income: 20,
        interest_rate: 5
      }
    }
    return {
      //JavaScript spread .. gets rest of the data
      ...state,
      [event.name]: event.value
    }
  }
