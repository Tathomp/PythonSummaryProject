import React, { Component } from "react";
//import HomePage from './homepage';
import SummaryPage from './SummaryPage';
import { render } from "react-dom";

export default function App(props){
  

    return (
      <div>
               <SummaryPage></SummaryPage>
      </div>

    );
  
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);