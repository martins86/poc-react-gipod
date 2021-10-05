import React from "react";

import "./content.css";
import Header from "./header";

const Content = (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className="content">Conteúdo</main>
  </React.Fragment>
);

export default Content;
