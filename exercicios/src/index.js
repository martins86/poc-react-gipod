import React from "react";
import ReactDOM from "react-dom";

// import Primeiro from './componentes/primeiro';

// ReactDOM.render(
//   <Primeiro />,
//   document.getElementById('root')
// );

// import BomDia from "./componentes/bomDia";

// ReactDOM.render(<BomDia nome="Thiago" />, document.getElementById("root"));

// import Mult from "./componentes/multiplos";

// ReactDOM.render(
//   <div>
//     <Mult.BoaTarde nome="Thiago" />
//     <Mult.BoaNoite nome="Martins" />
//   </div>,
//   document.getElementById("root")
// );

import Saudacao from './componentes/saudacao';

ReactDOM.render(
    <Saudacao tipo="Bom Dia" nome="Ana" />, 
    document.getElementById("root")
);
