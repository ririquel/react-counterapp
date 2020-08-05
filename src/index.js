import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#App");

// ReactDOM.render(<PrimeraApp saludo="Hola soy Richi" />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
