import {createElement, Fragment} from "react";
window.React= {createElement:createElement, Fragment:Fragment};

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "../mobxReactiveModel.js";
import "../styles.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ReactRoot model={reactiveModel} />
  </BrowserRouter>
);

// const mountedApp= createRoot(document.getElementById('root'))
// mountedApp.render(<div>hello world!</div>);

// test api fetching
// fetch("https://tarotapi.dev/api/v1/cards/random?n=10")
//   .then(function (response) {
//     console.log("HTTP status:", response.status);
//     return response.json();
//   })
//   .then(function (response) {
//     console.log("Tarot API data:", response);
//   })
//   .catch(function (error) {
//     console.error("Fetch failed:", error);
//   });