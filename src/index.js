import React from "react";
import ReactDOM from "react-dom";
// react and react-dom are basically our react
// therefore importing these two dependencies allow us to use the different features of react
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  // there is a id of root element in the index.html file in the public dir.
  // That is the only file that react will sent/run [Single Page Application] - which means only one html file is delivered to the browser and only one file is rendered
  // we import our finished react application to this file which updates the browser
  // whatever we do in <App/> is added inside this div with id root
);

