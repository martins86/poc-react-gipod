import React from "react";

import "./button.css";

const Button = (props) => {
  let stylesClass = "button ";
  stylesClass += props.operation ? "operation" : "";
  stylesClass += props.double ? "double" : "";
  stylesClass += props.triple ? "triple" : "";

  return (
    <button
      onClick={() => props.click(props.label)}
      className={stylesClass}
    >
      {props.label}
    </button>
  );
};

export default Button;
