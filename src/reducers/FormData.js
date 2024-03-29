export const formChangeData = (state, event) => {
    //console.log(`Key: ${event.name}, Value: ${event.value}`)
    if(event.reset) {
      return {
        Years: { value: "1", label:"1 Year"}, //formatted for react select
        University: "",
        in_state: false,
        Career: "",
        State: { value: "US", label: "State"}, //formatted for react select
        Budget: "",
        percent_income: 20,
        interest_rate: 5
      }
    }
    //rests checkbox to false so its not set to true for private universities
    else if (event.resetStateCheck) {
      return {
        ...state,
        in_state: false
      }
    }
    return {
      //JavaScript spread .. gets rest of the data
      ...state,
      [event.name]: event.value
    }
  }

