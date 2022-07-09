//Remove <React.StrictMode>
//https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
