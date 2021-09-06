import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './routes/About';
import Privacy from './routes/Privacy';
import FAQ from './routes/FAQ';
import Home from './routes/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  //the Navbar an footer component will be displayed across all of the pages
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
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
