import React from "react";

const NavIconLink = (props) => (
  <a href={props.url} title={props.title}>
    <i className={`fa fa-${props.icon}`}></i> {props.title}
  </a>
);

export default NavIconLink;
