import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./scss/app";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App name={"Laëtitia"} />, mountNode);
