import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/primeiro/primeiro";
import BomDia from "./componentes/com-parametros/bomDia";
import Mult from "./componentes/dois-em-um/multiplos";
import Saudacao from "./componentes/acoes-events-on-change/saudacao";

const AppRender = [
  <Primeiro />,
  <BomDia nome="Thiago" />,
  <Saudacao tipo="Bom Dia" nome="Ana" />,
  [<Mult.BoaTarde nome="Thiago" />, <Mult.BoaNoite nome="Martins" />],
];

ReactDOM.render(AppRender, document.getElementById("root"));
