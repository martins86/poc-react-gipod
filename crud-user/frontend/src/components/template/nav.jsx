import React from "react";

import "./nav.css";
import NavIconLink from "./../shared/nav-icon-link"

const Nav = (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavIconLink url="/" icon="home" title="Inicio" />
      <NavIconLink url="/users" icon="users" title="Usuários" />
    </nav>
  </aside>
);

export default Nav;
