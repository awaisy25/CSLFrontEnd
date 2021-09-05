import React from 'react';

import Form from "../components/Forms";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
//home page that will show the Form, banner and short description section underneath the form
function Home() {
    return (
    <div>
        <Banner />
            <Form />
        <BottomContainer />
    </div>
    )
}
    
export default Home;