import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./scss/app.scss";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
