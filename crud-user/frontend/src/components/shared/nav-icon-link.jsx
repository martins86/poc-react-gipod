import React from "react";
import { Link } from "react-router-dom";

const NavIconLink = (props) => (
  <Link to={props.url} title={props.title}>
    <i className={`fa fa-${props.icon}`}></i> {props.title}
  </Link>
);

export default NavIconLink;
