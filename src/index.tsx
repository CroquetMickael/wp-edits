import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Page/App";
import "./index.css";
import "./tailwind.css";
import * as serviceWorker from "./serviceWorker";
import { functions } from "./Database/Connection";

functions.tryConnectBdd();
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
