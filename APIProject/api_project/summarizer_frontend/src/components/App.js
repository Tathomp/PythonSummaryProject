import React, { Component } from "react";
//import HomePage from './homepage';
import { render } from "react-dom";

export default function App(props){
  

    return (
      <div>
              Test
      </div>

    );
  
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);