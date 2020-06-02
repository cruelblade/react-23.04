import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";
import "./index.css";

function Output(){
return (
    <div>
      <HelloMessage name="незнакомец" />
    </div>
  )
};

ReactDOM.render(
  <Output />,
  document.getElementById("hello-example")
);