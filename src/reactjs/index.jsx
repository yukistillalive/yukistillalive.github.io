import {createElement, Fragment} from "react"; // 2.install the JSX element creator
window.React= {createElement:createElement, Fragment:Fragment}; // needed in the lab because it works with both React and Vue

// TODO make a reactive model (application state), pass it as prop to the components used
import { createRoot } from "react-dom/client";
import { ReactRoot } from "./ReactRoot.jsx"; // 3.import the root component, arranges the app visually
import { reactiveModel } from "../mobxReactiveModel.js"; // 1.get the reactive model

// 4.mount the app in the browser page. Test at http://localhost:8080/react.html
createRoot(document.getElementById('root')).render(<ReactRoot model={reactiveModel} />);

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