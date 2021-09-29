import React from "react";
import Filho from "./filho";

const Pai = (props) => (
  <div>
    <h1>
      {props.nome} {props.sobreNome}
    </h1>
    <h2>Filhos</h2>
    <ul>
      <Filho nome="Pedro" sobreNome={props.sobreNome} />
      <Filho {...props} />
      <Filho {...props} nome="Carla" />
    </ul>
  </div>
);

export default Pai;
