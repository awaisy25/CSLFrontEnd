import React from "react";
import Form from "./components/Forms";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomContainer from "./components/BottomContainer";
import './App.css';
import About from './routes/About';
import Privacy from './routes/Privacy';
import FAQ from './routes/FAQ';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  //the Navbar an footer component will be displayed across all of the pages
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Form />
            <BottomContainer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
