import React from "react";

import "./logo.css";
import logo from "./../../assets/images/logo.svg";

const Logo = (props) => (
  <aside className="logo">
    <a href="/">
      <img src={logo} alt="Logo React" />
    </a>
  </aside>
);

export default Logo;
