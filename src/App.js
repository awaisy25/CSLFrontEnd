import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Forms";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BottomContainer from "./components/BottomContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Form />
      <BottomContainer />
      <Footer />
    </div>
  );
}

export default App;
