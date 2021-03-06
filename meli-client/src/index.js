import { hydrate } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Core from "./core";
import reportWebVitals from "./reportWebVitals";

hydrate(<Core />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
