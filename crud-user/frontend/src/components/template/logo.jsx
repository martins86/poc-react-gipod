import React from "react";
import { Link } from "react-router-dom";

import "./logo.css";
import logo from "./../../assets/images/logo.svg";

const Logo = (props) => (
  <aside className="logo">
    <Link to="/">
      <img src={logo} alt="Logo React" />
    </Link>
  </aside>
);

export default Logo;
